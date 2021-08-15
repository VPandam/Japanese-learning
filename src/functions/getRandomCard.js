import getRandomInt from "./getRandomInt"

export default function getRandomCard (min, max) {
        

    let card = getRandomInt(min, max)

    if (card !== undefined){
        return card;
    }

}