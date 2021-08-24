import React from "react"
import './FlipCard.css'

import Card from '../Card/Card'


export default function FlipCard (props){

    const click = () =>{
        const flipCard = document.getElementById('flip-card-inner');
        if(!flipCard.classList.contains('rotate')){
            flipCard.classList.toggle('rotate')
            setTimeout(() =>{
            if(flipCard.classList.contains('rotate')){
                flipCard.classList.toggle('rotate')
            }
        }, 1000)
        }
        
    }
    return (
        
        <div className='flip-card' onClick={click}>
            <div className ='flip-card-inner' id='flip-card-inner'>

                
                {props.children}
                
                <div className='back-card'>
                     <p>
                        {props.syllable.toString().toUpperCase()}
                    </p>
                </div>
            </div>
        </div>
    )
}






