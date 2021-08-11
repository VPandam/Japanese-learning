import react from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css'

export default function Home(){
    return(
        <div>
            <p>HOME</p>
            <div className='button-game'>
                <Link to='/lvlselect'>Game</Link>
            </div>
        
        </div>
    )
    
}