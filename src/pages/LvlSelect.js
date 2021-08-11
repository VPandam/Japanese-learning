import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/LvlSelect.css'


export default function LvlSelect(){
    const [type, setType] = useState("");
    const [lvl, setLvl] = useState(undefined);


    return(
        <React.Fragment>
            <div>
                <p>What do you want to practice?</p>
                <button className='button' onClick={() => setType("hiragana")}> HIRAGANA </button>
                <button className='button' onClick={() => setType("katakana")}> KATAKANA </button>
                <button className='button' onClick={() => setType("all")}> ALL </button>
                
                <p>LVL?</p>
                <button className='button' onClick={() => setLvl(1)}> 1 </button>
                <button className='button' onClick={() => setLvl(2)}> 2 </button>
                <button className='button' onClick={() => setLvl(3)}> 3 </button>
            </div> 

        <div className='button'>
            <Link to={{
                pathname: '/game',
                state: {
                    type: type,
                    lvl: lvl
                }
            }} 
            >
                <label>GAME</label>
            </Link>
        </div>

        </React.Fragment>
    )
}