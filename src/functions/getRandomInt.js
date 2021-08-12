
export default function getRandomInt (min, max) {
    let randomInt;
    // var RandomOrg = require('random-org');

    // var random = new RandomOrg({ apiKey: '54e8a177-dcdc-4f57-aac8-f99b57ce46bb' });
    // await random.generateIntegers({ min: min, max: max, n: 1 })
    // .then(function(result) {
    //     randomInt = result.random.data[0];
        
    // });
    randomInt = Math.floor(Math.random() * (max - min + 1)) + min;


    console.log("randomInt: " + randomInt) 
    return randomInt
}