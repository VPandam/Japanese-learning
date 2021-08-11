import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/LvlSelect.css'


export default function LvlSelect(){
    const [state, setState] = useState({type: ""});

    return(
        <React.Fragment>
            <div>
                <p>What do you want to practice?</p>
                <button className='button' onClick={() => setState({type:"hiragana"})}> HIRAGANA </button>
                <button className='button' onClick={() => setState({type:"katakana"})}> KATAKANA </button>
                <button className='button' onClick={() => setState({type:"all"})}> ALL </button>
                
                <p>LVL?</p>
                <button className='button' onClick={() => setState({type:"hiragana"})}> HIRAGANA </button>
                <button className='button' onClick={() => setState({type:"katakana"})}> KATAKANA </button>
                <button className='button' onClick={() => setState({type:"all"})}> ALL </button>
            </div> 

        <div className='button'>
            <Link to={{
                pathname: '/game',
                state: {
                    type: state.type
                }
            }} 
            >
                <label>GAME</label>
            </Link>
        </div>

        </React.Fragment>
    )
}