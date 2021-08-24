import React, { useEffect, useState} from 'react';
import Chrono from '../../components/Chrono.js'
import Card from '../../components/Card/Card'
import './Game.css'

import getRandomCard from '../../functions/getRandomCard.js';
import getPhotoCode from '../../functions/getPhotoCode.js';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Link } from 'react-router-dom';
import backArrow from '../../images/arrow.png'
import { act } from 'react-dom/test-utils';


export default function Game (props){

    const cardList = {0:["a"], 1:["i"], 2:["u"], 3:["e"], 4:["o"], 5:["ka"], 6:["ki"],
     7:["ku"], 8:["ke"], 9:["ko"], 10:["sa"], 11:["shi"], 12:["su"], 
     13:["se"], 14:["so"], 15:["ta", "da"], 16:["chi"], 17:["tsu"], 18:["te"],
     19:["to"], 20:["na"], 21:["ni"], 22:["nu"], 23:["ne"], 24:["no"], 25:["ha"], 
     26:["hi"], 27:["fu"], 28:["he"], 29:["ho"], 30:["ma"], 31:["mi"], 32:["mu"],
     33:["me"], 34:["mo"], 35:["ya"], 36:["yu"], 37:["yo"], 38:["ra"], 39:["ri"], 40:["ru"], 41:["re"],
     42:["ro"], 43:["wa"], 44:["wo", "o"],  45:["n"]    
     };

    
    
    const cardListLvl = {1:4, 2:9, 3:14, 4:19, 5:24, 6:29, 7:37, 8:45};

    
    
    
    
    const [actualCard, setActualCard] = useState(undefined);
    const [userInput, setUserInput] = useState('');
    const [photoCode, setPhotoCode] = useState('');
    const [gameInfo, setGameInfo] = useState({type: props.location.state.type,
         lvl: props.location.state.lvl,  minCard: props.location.state.minCard, 
         maxCard: props.location.state.maxCard});
    const [gameScore, setGameScore] = useState({totalTries: 0, totalSuccess: 0, totalFails: 0});
    let syllable = cardList[actualCard]

    





    useEffect(() => {

        console.log(props.location.state)
        setGameInfo({type: props.location.state.type, lvl: props.location.state.lvl, 
            minCard: props.location.state.minCard, maxCard: props.location.state.maxCard})
        
        nextPhoto();

    }, [])


    const nextPhoto =  async () => {
        let card;
        if (gameInfo.maxCard === undefined){
            gameInfo.maxCard = cardListLvl[gameInfo.lvl];
        }
        console.log(gameInfo)
        card = await getRandomCard(gameInfo.minCard, gameInfo.maxCard);
        
        setActualCard(card)
        let code = getPhotoCode(card, gameInfo.type);
        setPhotoCode(code)
        document.getElementById('input-text-box').value = '';
    }
    
    const handleChange = e => {

        setUserInput(e.target.value.toLowerCase())

    }

    const handleSubmit = (ev) => {
        
        ev.preventDefault();
        console.log("handleSubmit " + cardList[actualCard])
        const inputBox = document.getElementById("input-text-box")
        const submitButton = document.getElementById('button-send')
        if (cardList[actualCard].includes(userInput)){
        
            setGameScore({totalTries: ++gameScore.totalTries, totalSuccess: ++gameScore.totalSuccess, 
                totalFails: gameScore.totalFails});
            inputBox.classList.toggle('correct');
            submitButton.classList.toggle('correct');
            setTimeout(() => {
                inputBox.classList.toggle('correct');
                submitButton.classList.toggle('correct');
            }, 400)
            nextPhoto();
            
        }else{
            
            setGameScore({totalTries: ++gameScore.totalTries, totalSuccess: gameScore.totalSuccess, 
                totalFails: ++gameScore.totalFails});
            
            inputBox.value = '';
            inputBox.classList.toggle('incorrect');
            submitButton.classList.toggle('incorrect');
            setTimeout(() => {
                inputBox.classList.toggle('incorrect');
                submitButton.classList.toggle('incorrect');
            }, 400)

        }
    }

    

    return(
       
        <>
                
            <div className='principal-container'>
                <div className='back'>
                    <CustomButton button='back-button'>
                        <Link to ='/'> 
                            <img src={backArrow} alt="" />
                        </Link> 
                    </CustomButton>     
                </div>
                <div className='second-container'>

                    <div className='game-container'>
                        <div className='game-card-container'>

                            <Card 
                            id={actualCard} 
                            type={gameInfo.type} 
                            photoCode={photoCode}
                            lvl={gameInfo.lvl}
                            syllable={syllable}
                            />
                        </div>
                                    
                        <form className='input-container'>
                            <input 
                            onChange={handleChange} 
                            className='input-text' 
                            id='input-text-box'
                            type="text"
                            autoComplete="off"
                            />
                            <CustomButton click={handleSubmit} id ='button-send' button='send' c> Send</CustomButton>
                        </form>

                        
                        <div className='game-info'>
                            {/* <Chrono/> */}
                            <p>Tries: {gameScore.totalTries}</p>
                            <p>Success: {gameScore.totalSuccess}</p>
                            <p>Fail: {gameScore.totalFails}</p>
                        </div>

                    </div>
            

                            
                    
                    
                        
                </div>
            </div>
        </>
    )
        
}

