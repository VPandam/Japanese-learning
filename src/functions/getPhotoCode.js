
import getRandomInt from "./getRandomInt";

export default function getPhotoCode (card, type) {
    
    let photoCode;
    let actualCard = card
    if(type === "hiragana"){
        return photoCode =  'hir' + actualCard;
    }else if (type === "katakana"){
        return photoCode = 'kat'  + actualCard;
    }else if (type === "all"){
        let randomType = getRandomInt(0,1);
        console.log(randomType + "type")
        if (randomType === 0){
            return photoCode = 'hir' + actualCard;
        }else if (randomType === 1){
            photoCode = 'kat' + actualCard
            return photoCode;
        }
    }
}