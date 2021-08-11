import React from 'react';
import './styles/Card.css'


export default function Card (props){


    
    if(props.id >= 0){

        return(
            <div className='card-container'>
                <img src={`/${props.type}/${props.lvl}/${props.photoCode}.png`} alt="" />
            </div>
        )
    }else{
        return(
            <div className='card-container'>
                
            </div>
        )
    }
    
}