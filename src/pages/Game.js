import React from 'react';
import Chrono from '../components/Chrono.js'
import Card from '../components/Card'
import './styles/Game.css'

let cardList;
let userInputBox;
let photoCode;
let totalTries;
let totalSuccess;
let totalFails;
class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {actualCard: undefined, userInput: undefined, type: "all", photoCode: ""}
        // this.handleSubmit = this.handleSubmit.bind(this);
        cardList = {0:"a", 1:"i", 2:"u", 3:"e", 4:"o", 5:"ka", 6:"ki", 7:"ku", 8:"ke", 9:"ko"};
        totalTries = 0;
        totalSuccess = 0;
        totalFails = 0;
        

    }

    async getRandomInt(min, max) {
        let randomInt;
        var RandomOrg = require('random-org');

        var random = new RandomOrg({ apiKey: '54e8a177-dcdc-4f57-aac8-f99b57ce46bb' });
        await random.generateIntegers({ min: min, max: max, n: 1 })
        .then(function(result) {
            randomInt = result.random.data[0];
            
        });
        console.log("randomInt: " + randomInt) 
        return randomInt
    }
    getCard(){
        let getCardThis = this;
        let randomIntPromise = this.getRandomInt(0, Object.keys(cardList).length-1);
        randomIntPromise.then(function(card){
            getCardThis.setState({actualCard: card})
        });
    }
    
    handleChange = e => {

        this.setState({userInput : e.target.value})

    }

    handleClick(){
        console.log("handleClick " + cardList[this.state.actualCard])
        if (this.state.userInput === cardList[this.state.actualCard]){
            alert("zi putito zi");
            this.nextPhoto();
            totalTries = ++totalTries;
            totalSuccess = ++totalSuccess;
            
        }else{
            alert("nono putito");
            totalFails = ++totalFails;
            totalTries = ++totalTries;
        }
    }

    componentDidMount(){
        userInputBox = document.getElementById('input-text-box');
        userInputBox.addEventListener("keyup", function(event){
            if (event.keyCode === 13){
                event.preventDefault();
                document.getElementById("button-send").click();
            }
        })

        this.nextPhoto();
        

    }
    getPhotoCode(){
        if(this.state.type === "hiragana"){
            this.setState({photoCode: this.state.actualCard + 'hir'});

        }else if (this.state.type === "katakana"){
            this.setState({photoCode: this.state.actualCard + 'kat'});

        }else{
            let type = this.getRandomInt(0,1);
            if (type === 0){
                this.setState({photoCode: this.state.actualCard + 'hir'});
            }else{
                console.log(this.state)
                this.setState({photoCode: this.state.actualCard + 'kat'});
            }
        }
        
    }
    async nextPhoto(){
        this.getCard();
        this.getPhotoCode();
        document.getElementById('input-text-box').value = '';
    }
    render(){
        return(
            <div>
                <p>Game</p>
                <Chrono/>
                <div>
                    <p>Tries: {totalTries}</p>
                    <p>Success: {totalSuccess}</p>
                    <p>Fail: {totalFails}</p>
                </div>
                <div className='game-container'>

                    <div className='game-card-container'>
                        <Card id={this.state.actualCard} type={this.state.type} photoCode={this.state.photoCode}/>
                    </div>
                    <div className='input-container'>
                        <input 
                        onChange={this.handleChange} 
                        className='input-text' 
                        id='input-text-box'
                        type="text"
                        />
                        <button onClick={this.handleClick.bind(this)} id ='button-send'> Send</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;