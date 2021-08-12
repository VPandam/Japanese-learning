import React, { useEffect, useState} from 'react';
import Chrono from '../components/Chrono.js'
import Card from '../components/Card'
import './styles/Game.css'

import getRandomCard from '../functions/getRandomCard.js';
import getPhotoCode from '../functions/getPhotoCode.js';


export default function Game (props){

    const cardList = {0:["a"], 1:["i"], 2:["u"], 3:["e"], 4:["o"], 5:["ka"], 6:["ki", "gi"],
     7:["ku", "gu"], 8:["ke", "ge"], 9:["ko", "go"], 10:["sa", "za"], 11:["shi", "ji"], 12:["su", "zu"], 
     13:["se", "ze"], 14:["so", "zo"]};

    
    
    const cardListLvl = {1:4, 2:9, 3:14};

    
    
    
    
    const [actualCard, setActualCard] = useState(undefined);
    const [userInput, setUserInput] = useState('');
    const [photoCode, setPhotoCode] = useState('');
    const [gameInfo, setGameInfo] = useState({type: props.location.state.type,
         lvl: props.location.state.lvl });
    const [gameScore, setGameScore] = useState({totalTries: 0, totalSuccess: 0, totalFails: 0});





    useEffect(() => {

        setGameInfo({type: props.location.state.type, lvl: props.location.state.lvl})
        nextPhoto();
    }, [])


    const nextPhoto =  async () => {

        console.log(gameInfo)
        let card = await getRandomCard(cardListLvl[gameInfo.lvl]);
        setActualCard(card)
        let code = getPhotoCode(card, gameInfo.type);
        setPhotoCode(code)
        document.getElementById('input-text-box').value = '';
    }
    
    const handleChange = e => {

        setUserInput(e.target.value)

    }

    const handleSubmit = (ev) => {
        
        ev.preventDefault();
        console.log("handleSubmit " + cardList[actualCard])
        if (cardList[actualCard].includes(userInput)){
            alert("zi putito zi");
        
            setGameScore({totalTries: ++gameScore.totalTries, totalSuccess: ++gameScore.totalSuccess, 
                totalFails: gameScore.totalFails});
            nextPhoto();
            
        }else{
            alert("nono putito");
            setGameScore({totalTries: ++gameScore.totalTries, totalSuccess: gameScore.totalSuccess, 
                totalFails: ++gameScore.totalFails});
            document.getElementById('input-text-box').value = '';

        }
    }

    return(
       
        <>
            <p>Game</p>
            <Chrono/>
            <div>
                <p>Tries: {gameScore.totalTries}</p>
                <p>Success: {gameScore.totalSuccess}</p>
                <p>Fail: {gameScore.totalFails}</p>
            </div>
            <div className='game-container'>

                <div className='game-card-container'>
                    <Card 
                    id={actualCard} 
                    type={gameInfo.type} 
                    photoCode={photoCode}
                    lvl={gameInfo.lvl}

                    />
                </div>
                <form className='input-container'>
                    <input 
                    onChange={handleChange} 
                    className='input-text' 
                    id='input-text-box'
                    type="text"
                    />
                    <button onClick={handleSubmit} id ='button-send'> Send</button>
                </form>
            </div>
        </>
    )
        
}

