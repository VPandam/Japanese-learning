import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './LvlSelect.css'


export default function LvlSelect(){
    const [type, setType] = useState("");
    const [lvl, setLvl] = useState({minCard: 0, maxCard: undefined, lvl: 1});


    return(
        <React.Fragment>
            <div>
                <p>What do you want to practice?</p>
                <button className='button' onClick={() => setType("hiragana")}> HIRAGANA </button>
                <button className='button' onClick={() => setType("katakana")}> KATAKANA </button>
                <button className='button' onClick={() => setType("all")}> ALL </button>
                
                <p>LVL?</p>
                <button className='button' onClick={
                    () => setLvl({minCard:0, maxCard: undefined, lvl: 1})}> 1 </button>
                <button className='button' onClick={
                    () => setLvl({minCard:0, maxCard: undefined, lvl: 2})}> 2 </button>
                <button className='button' onClick={
                    () => setLvl({minCard:0, maxCard: undefined, lvl: 3})}> 3 </button>
                <button className='button' onClick={
                    () => setLvl({minCard:0, maxCard: undefined, lvl: 4})}> 4 </button>
                <button className='button' onClick={
                    () => setLvl({minCard:0, maxCard: undefined, lvl: 5})}> 5 </button>
                <button className='button' onClick={
                    () => setLvl({minCard:0, maxCard: undefined, lvl: 6})}> 6 </button>
                <button className='button' onClick={
                    () => setLvl({minCard:0, maxCard: undefined, lvl: 7})}> 7 </button>
                <button className='button' onClick={
                    () => setLvl({minCard:0, maxCard: undefined, lvl: 8})}> 8 </button>
                <button className='button' onClick={
                    () => setLvl({minCard:5, maxCard: 14, lvl: undefined})}> ka-sa </button>
            </div> 

        <div className='button'>
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

        </React.Fragment>
    )
}