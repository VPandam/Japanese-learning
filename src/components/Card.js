import React from 'react';
import './styles/Card.css'
import photo0 from '../images/0.png'

let randomNumber;

export default class Card extends React.Component{



    componentDidMount(){

    }
    render(){
        return(
            <div className='card-container'>
                <img src={`/${this.props.type}/${this.props.photoCode}.png`} alt="" />
            </div>
        )
    }
}