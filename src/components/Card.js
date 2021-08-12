import React from 'react';
import './styles/Card.css'

export default function Card (props){


    const urlList = {
        hir0: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Japanese_Hiragana_kyokashotai_A.svg/1024px-Japanese_Hiragana_kyokashotai_A.svg.png', 
        kat0: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Japanese_Katakana_A.png',
        hir1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Japanese_Hiragana_kyokashotai_I.svg/1024px-Japanese_Hiragana_kyokashotai_I.svg.png',
        kat1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Japanese_Katakana_I.svg/1024px-Japanese_Katakana_I.svg.png',
        hir2: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Japanese_Hiragana_kyokashotai_U.png',
        kat2: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Japanese_Katakana_U.png',
        hir3: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Japanese_Hiragana_kyokashotai_E.svg/1024px-Japanese_Hiragana_kyokashotai_E.svg.png',
        kat3: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Japanese_Katakana_E.svg/1024px-Japanese_Katakana_E.svg.png',
        hir4: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Japanese_Hiragana_kyokashotai_O.svg/1024px-Japanese_Hiragana_kyokashotai_O.svg.png',
        kat4: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Japanese_Katakana_O.svg/1024px-Japanese_Katakana_O.svg.png',
        hir5: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Japanese_Hiragana_kyokashotai_KA.svg/1024px-Japanese_Hiragana_kyokashotai_KA.svg.png',
        kat5: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Japanese_Katakana_KA.png',
        hir6: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Japanese_Hiragana_kyokashotai_KI.svg/1024px-Japanese_Hiragana_kyokashotai_KI.svg.png',
        kat6: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Japanese_Katakana_KI.png',
        hir7: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Japanese_Hiragana_kyokashotai_KU.svg/1024px-Japanese_Hiragana_kyokashotai_KU.svg.png',
        kat7: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Japanese_Katakana_KU.png',
        hir8: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Japanese_Hiragana_kyokashotai_KE.svg/1024px-Japanese_Hiragana_kyokashotai_KE.svg.png',
        kat8: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Japanese_Katakana_KE.png',
        hir9: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Japanese_Hiragana_kyokashotai_KO.svg/1024px-Japanese_Hiragana_kyokashotai_KO.svg.png',
        kat9: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Japanese_Katakana_KO.png',
        hir10: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Japanese_Hiragana_kyokashotai_SA.svg/1024px-Japanese_Hiragana_kyokashotai_SA.svg.png',
        kat10: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Japanese_Katakana_SA.png',
        hir11: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Japanese_Hiragana_kyokashotai_SI.svg/1024px-Japanese_Hiragana_kyokashotai_SI.svg.png',
        kat11: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Japanese_Katakana_SHI.png',
        hir12: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Japanese_Hiragana_kyokashotai_SU.svg/1024px-Japanese_Hiragana_kyokashotai_SU.svg.png',
        kat12: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Japanese_Katakana_SU.png',
        hir13: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Japanese_Hiragana_kyokashotai_SE.svg/1024px-Japanese_Hiragana_kyokashotai_SE.svg.png',
        kat13: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Japanese_Katakana_SE.png',
        hir14: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Japanese_Hiragana_kyokashotai_SO.svg/1024px-Japanese_Hiragana_kyokashotai_SO.svg.png',
        kat14: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Japanese_Katakana_SO.png',
        hir15: '',
        kat15: '',
        hir16: '',
        kat16: '',
        hir17: '',
        kat17: '',
        hir18: '',
        kat18: '',
        hir19: '',
        kat19: '',
        hir20: '',
        kat20: '',
        hir21: '',
        kat21: '',
        hir22: '',
        kat22: '',
        hir23: '',
        kat23: '',
        hir24: '',
        kat24: '',
        hir25: '',
        kat25: '',
        hir26: '',
        kat26: '',



    }


    if(props.photoCode){

        return(
            <div className='card-container'>
                <img src={urlList[props.photoCode]} alt="" />
            </div>
        )
    }else{
        return(
            <div className='card-container'>
                
            </div>
        )
    }
    
}