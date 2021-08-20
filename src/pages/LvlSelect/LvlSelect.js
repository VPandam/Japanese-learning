import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './LvlSelect.css'

import CustomButton from '../../components/CustomButton/CustomButton';


export default function LvlSelect(){
    const [type, setType] = useState('');
    const [lvl, setLvl ] = useState({minCard: 0, maxCard: undefined, lvl: undefined});


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
    
    
 

    return(
        <div className='lvl-select'>
            <div className ='button-type-container slide-in-left' id='button-type-container'>
                <div className='textContainer-type'>
                    <h1>What do you want to practice?</h1>
                </div>
                <div className='buttons-type-container' >
                    <CustomButton button='Type' click={() =>setType("hiragana")} id={1}> HIRAGANA </CustomButton>
                    <CustomButton button='Type' click={() =>setType("katakana")} id={2}> KATAKANA </CustomButton>
                    <CustomButton button='Type' click={() =>setType("all")} id={3}> ALL </CustomButton>
                </div>
                    
                <CustomButton button='button-choselvl' click={choseLvl} id={4}> Choose level </CustomButton>
                
            </div> 

            {type&&
                <div className='button-lvl-container no-display' id='button-lvl-container'>
                    <div className='text-lvl-container'>
                        <h1>Choose a lvl or practice specific syllables</h1>
                    </div>
                    <div className='buttons-lvl-container'>
                        <CustomButton button='lvl' click={() => setLvlE(0, undefined, 1)} id={5}> 1 </CustomButton>
                        <CustomButton button='lvl' click={() => setLvlE(0, undefined, 2)} id={6}> 2 </CustomButton>
                        <CustomButton button='lvl' click={() => setLvlE(0, undefined, 3)} id={7}> 3 </CustomButton>
                        <CustomButton button='lvl' click={() => setLvlE(0, undefined, 4)} id={8}> 4 </CustomButton>
                        <CustomButton button='lvl' click={() => setLvlE(0, undefined, 5)} id={9}> 5 </CustomButton>
                        <CustomButton button='lvl' click={() => setLvlE(0, undefined, 6)} id={10}> 6 </CustomButton>
                        <CustomButton button='lvl' click={() => setLvlE(0, undefined, 7)} id={11}> 7 </CustomButton>
                        <CustomButton button='lvl' click={() => setLvlE(0, undefined, 8)} id={12}> 8 </CustomButton>
                        
                        <CustomButton button='lvl' click={() => setLvlE(5, 14, undefined)} id={13}> k*-s* </CustomButton>
                        <CustomButton button='lvl' click={() => setLvlE(15, 24, undefined)} id={14}> t*-n* </CustomButton>
                        <CustomButton button='lvl' click={() => setLvlE(25, 34, undefined)} id={15}> h*-m* </CustomButton>
                        <CustomButton button='lvl' click={() => setLvlE(35, 45, undefined)} id={16}> y*-r*-n </CustomButton>
                       
                    </div>
                    <div className='buttonGame button'>
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
                </div>
            }
            
            
           
            
            

        </div>
    )
}