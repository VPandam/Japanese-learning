import getRandomInt from "./getRandomInt"

export default function getRandomCard (max) {
        

    let card = getRandomInt(0, max)

    if (card !== undefined){
        return card;
    }

}