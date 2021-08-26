import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './LvlSelect.css'

import CustomButton from '../../components/CustomButton/CustomButton';


export default function LvlSelect(){
    const [type, setType] = useState('');
    const [lvl, setLvl ] = useState({});

    let id = 0;
    const setLvlE = (min, max, lvl) => {
        setLvl({minCard: min, maxCard: max, lvl: lvl})
    }
    
    const choseLvl = () => {
        if (type !== ''){
            const typeContainer = document.getElementById('button-type-container');
            typeContainer.classList.add('disappear')
            const lvlContainer = document.getElementById('button-lvl-container');
            console.log(lvlContainer)
            setTimeout(() => changeScreen(typeContainer, lvlContainer), 1000)
        }
    }

    const changeScreen = (element, secondElement) => {
        element.classList.toggle('no-display');
        secondElement.classList.add('slide-in-left')
        secondElement.classList.toggle('no-display');
    }

    useEffect(() => {
        if(lvl.maxCard || lvl.minCard){

            
            const buttonGame = document.getElementById('buttonGame')
            if(!buttonGame.classList.contains('slide-in-left')){
                buttonGame.classList.add('slide-in-left')
            }
            
            if(buttonGame.classList.contains('no-display')){
                buttonGame.classList.toggle('no-display');
            }
        }

    }, [lvl])
    
    
 

    return(
        <div className='lvl-select'>
            <div className ='button-type-container slide-in-left' id='button-type-container'>
                <div className='textContainer-type'>
                    <h1>What do you want to practice?</h1>
                </div>
                <div className='buttons-type-container' >
                    <CustomButton button='Type' click={() =>setType("hiragana")} id={id}> HIRAGANA </CustomButton>
                    <CustomButton button='Type' click={() =>setType("katakana")} id={++id}> KATAKANA </CustomButton>
                    <CustomButton button='Type' click={() =>setType("all")} id={++id}> ALL </CustomButton>
                </div>
                    
                <CustomButton button='button-choselvl' click={choseLvl} id={++id}> Choose level </CustomButton>
                
            </div> 

            {type&&
            <>
                <div className='button-lvl-container no-display' id='button-lvl-container'>
                    <div className='text-lvl-container'>
                        <h1>Choose a lvl or practice specific syllables</h1>
                    </div>
                    <div className='buttons-lvl-container'>

                        
                        <CustomButton button='lvl' click={() => setLvlE(5, 14, undefined)} id={++id}> K* - S* </CustomButton>
                        <CustomButton button='lvl' click={() => setLvlE(15, 24, undefined)} id={++id}> T* - N* </CustomButton>
                        <CustomButton button='lvl' click={() => setLvlE(25, 34, undefined)} id={++id}> H* - M* </CustomButton>
                        <CustomButton button='lvl' click={() => setLvlE(35, 45, undefined)} id={++id}> Y* - R* - N </CustomButton>
                        <CustomButton button='lvl' click={() => setLvlE(0, 45, undefined)} id={++id}> ALL </CustomButton>
                       
                    </div>
                    
                </div>
                <div className='buttonGame button no-display' id='buttonGame'>
                        <Link to={{
                            pathname: '/game',
                            state: {
                                type: type,
                                minCard: lvl.minCard,
                                maxCard: lvl.maxCard,
                                lvl: lvl.lvl
                            }
                        }} 
                        >
                            <label>GAME</label>
                        </Link>
                      </div>
            </>    
            }
            
            
           
            
            

        </div>
    )
}