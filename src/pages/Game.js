import React, { useEffect, useState} from 'react';
import Chrono from '../components/Chrono.js'
import Card from '../components/Card'
import './styles/Game.css'
import { useLocation } from 'react-router-dom';


export default function Game (props){

    const cardList = {0:"a", 1:"i", 2:"u", 3:"e", 4:"o", 5:"ka", 6:"ki", 7:"ku", 8:"ke",
    9:"ko", 10:"sa", 11:"shi", 12:"su", 13:"se", 14:"so"};
    
    const cardListLvl = {1:4, 2:9, 3:14};
    let userInputBox;
    let totalTries = 0;
    let totalSuccess = 0;
    let totalFails = 0;
    
    
    
    const [actualCard, setActualCard] = useState(undefined);
    const [userInput, setUserInput] = useState('');
    const [photoCode, setPhotoCode] = useState('');
    const [type, setType] = useState(undefined);
    const [lvl, setLvl] = useState(undefined);




    useEffect(() =>{
        console.log(props)
        console.log(props.location.state)
        setType (props.location.state.type)
        

        

        nextPhoto();
        
    }, [])

    const nextPhoto =  async () => {
        await getCard();
        
        getPhotoCode();
        document.getElementById('input-text-box').value = '';
    }

    const getCard = async () => {
        setLvl(props.location.state.lvl)
        
        console.log(lvl + "lvl")
        console.log(type + "type")
        let card = await getRandomInt(0, cardListLvl[lvl])

        if (card !== undefined){
            setActualCard(card)
        }

    }

    const getRandomInt = (min, max) => {
        let randomInt;
        // var RandomOrg = require('random-org');

        // var random = new RandomOrg({ apiKey: '54e8a177-dcdc-4f57-aac8-f99b57ce46bb' });
        // await random.generateIntegers({ min: min, max: max, n: 1 })
        // .then(function(result) {
        //     randomInt = result.random.data[0];
            
        // });
        randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    
        console.log("randomInt: " + randomInt) 
        return randomInt
    }

    
    
    const handleChange = e => {

        setUserInput(e.target.value)

    }

    const handleSubmit = (ev) => {
        
        ev.preventDefault();
        console.log("handleSubmit " + cardList[actualCard])
        if (userInput === cardList[actualCard]){
            alert("zi putito zi");
            nextPhoto();
            totalTries = ++totalTries;
            totalSuccess = ++totalSuccess;
            
        }else{
            alert("nono putito");
            totalFails = ++totalFails;
            totalTries = ++totalTries;
        }
    }

    
    const getPhotoCode = () => {
        if(type === "hiragana"){
            setPhotoCode (actualCard + 'hir');

        }else if (type === "katakana"){
            setPhotoCode (actualCard + 'kat');

        }else if (type === "all"){
            let randomType = getRandomInt(0,1);
            console.log(randomType + "type")
            if (randomType === 0){
                setPhotoCode (actualCard + 'hir');
            }else{
                setPhotoCode (actualCard + 'kat');
            }
        }
        console.log(photoCode)
        
    }
    

        

    return(
        <>
            <p>Game</p>
            <Chrono/>
            <div>
                <p>Tries: {totalTries}</p>
                <p>Success: {totalSuccess}</p>
                <p>Fail: {totalFails}</p>
            </div>
            <div className='game-container'>

                <div className='game-card-container'>
                    <Card 
                    id={actualCard} 
                    type={type} 
                    photoCode={photoCode}
                    lvl={lvl}
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

