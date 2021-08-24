import React from 'react';
import './Card.css'

import FlipCard from '../FlipCard/FlipCard';

export default function Card (props){


    const urlList = {
        hir0: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Japanese_Hiragana_kyokashotai_A.svg/1024px-Japanese_Hiragana_kyokashotai_A.svg.png',"https://upload.wikimedia.org/wikipedia/commons/d/d8/Hiragana_%E3%81%82_stroke_order_animation.gif"],
        kat0: ['https://upload.wikimedia.org/wikipedia/commons/8/82/Japanese_Katakana_A.png', "https://upload.wikimedia.org/wikipedia/commons/c/c8/Katakana_%E3%82%A2_stroke_order_animation.gif"],
        hir1: ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Japanese_Hiragana_kyokashotai_I.svg/1024px-Japanese_Hiragana_kyokashotai_I.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Hiragana_%E3%81%84_stroke_order_animation.gif'],
        kat1: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Japanese_Katakana_I.svg/1024px-Japanese_Katakana_I.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/9/94/Katakana_%E3%82%A4_stroke_order_animation.gif'],
        hir2: ['https://upload.wikimedia.org/wikipedia/commons/9/90/Japanese_Hiragana_kyokashotai_U.png', 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Hiragana_%E3%81%86_stroke_order_animation.gif'],
        kat2: ['https://upload.wikimedia.org/wikipedia/commons/e/e0/Japanese_Katakana_U.png', 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Katakana_%E3%82%A6_stroke_order_animation.gif'],
        hir3: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Japanese_Hiragana_kyokashotai_E.svg/1024px-Japanese_Hiragana_kyokashotai_E.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Hiragana_%E3%81%88_stroke_order_animation.gif'],
        kat3: ['https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Japanese_Katakana_E.svg/1024px-Japanese_Katakana_E.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/9/99/Katakana_%E3%82%A8_stroke_order_animation.gif'],
        hir4: ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Japanese_Hiragana_kyokashotai_O.svg/1024px-Japanese_Hiragana_kyokashotai_O.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Hiragana_%E3%81%8A_stroke_order_animation.gif'],
        kat4: ['https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Japanese_Katakana_O.svg/1024px-Japanese_Katakana_O.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/d/de/Katakana_%E3%82%AA_stroke_order_animation.gif'],
        hir5: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Japanese_Hiragana_kyokashotai_KA.svg/1024px-Japanese_Hiragana_kyokashotai_KA.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/9/97/Hiragana_%E3%81%8B_stroke_order_animation.gif'],
        kat5: ['https://upload.wikimedia.org/wikipedia/commons/9/9a/Japanese_Katakana_KA.png', 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Katakana_%E3%82%AB_stroke_order_animation.gif'],
        hir6: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Japanese_Hiragana_kyokashotai_KI.svg/1024px-Japanese_Hiragana_kyokashotai_KI.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/1/18/Hiragana_%E3%81%8D_stroke_order_animation.gif'],
        kat6: ['https://upload.wikimedia.org/wikipedia/commons/d/de/Japanese_Katakana_KI.png', 'https://upload.wikimedia.org/wikipedia/commons/8/81/Katakana_%E3%82%AD_stroke_order_animation.gif'],
        hir7: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Japanese_Hiragana_kyokashotai_KU.svg/1024px-Japanese_Hiragana_kyokashotai_KU.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/6/68/Hiragana_%E3%81%8F_stroke_order_animation.gif'],
        kat7: ['https://upload.wikimedia.org/wikipedia/commons/9/90/Japanese_Katakana_KU.png', 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Katakana_%E3%82%AF_stroke_order_animation.gif'],
        hir8: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Japanese_Hiragana_kyokashotai_KE.svg/1024px-Japanese_Hiragana_kyokashotai_KE.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/5/57/Hiragana_%E3%81%91_stroke_order_animation.gif'],
        kat8: ['https://upload.wikimedia.org/wikipedia/commons/6/60/Japanese_Katakana_KE.png', 'https://upload.wikimedia.org/wikipedia/commons/9/98/Katakana_%E3%82%B1_stroke_order_animation.gif'],
        hir9: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Japanese_Hiragana_kyokashotai_KO.svg/1024px-Japanese_Hiragana_kyokashotai_KO.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/8/83/Hiragana_%E3%81%93_stroke_order_animation.gif'],
        kat9: ['https://upload.wikimedia.org/wikipedia/commons/8/83/Japanese_Katakana_KO.png', 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Katakana_%E3%82%B3_stroke_order_animation.gif'],
        hir10: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Japanese_Hiragana_kyokashotai_SA.svg/1024px-Japanese_Hiragana_kyokashotai_SA.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/7/79/Hiragana_%E3%81%95_stroke_order_animation.gif'],
        kat10: ['https://upload.wikimedia.org/wikipedia/commons/d/d2/Japanese_Katakana_SA.png', 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Katakana_%E3%82%B5_stroke_order_animation.gif'],
        hir11: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Japanese_Hiragana_kyokashotai_SI.svg/1024px-Japanese_Hiragana_kyokashotai_SI.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Hiragana_%E3%81%97_stroke_order_animation.gif'],
        kat11: ['https://upload.wikimedia.org/wikipedia/commons/3/3a/Japanese_Katakana_SHI.png', 'https://upload.wikimedia.org/wikipedia/commons/3/36/Katakana_%E3%82%B7_stroke_order_animation.gif'],
        hir12: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Japanese_Hiragana_kyokashotai_SU.svg/1024px-Japanese_Hiragana_kyokashotai_SU.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/0/05/Hiragana_%E3%81%99_stroke_order_animation.gif'],
        kat12: ['https://upload.wikimedia.org/wikipedia/commons/a/a4/Japanese_Katakana_SU.png', 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Katakana_%E3%82%B9_stroke_order_animation.gif'],
        hir13: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Japanese_Hiragana_kyokashotai_SE.svg/1024px-Japanese_Hiragana_kyokashotai_SE.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Hiragana_%E3%81%9B_stroke_order_animation.gif'],
        kat13: ['https://upload.wikimedia.org/wikipedia/commons/4/45/Japanese_Katakana_SE.png', 'https://upload.wikimedia.org/wikipedia/commons/8/80/Katakana_%E3%82%BB_stroke_order_animation.gif'],
        hir14: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Japanese_Hiragana_kyokashotai_SO.svg/1024px-Japanese_Hiragana_kyokashotai_SO.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Hiragana_%E3%81%9D_stroke_order_animation.gif'],
        kat14: ['https://upload.wikimedia.org/wikipedia/commons/f/fc/Japanese_Katakana_SO.png', 'https://upload.wikimedia.org/wikipedia/commons/6/63/Katakana_%E3%82%BD_stroke_order_animation.gif'],
        hir15: ['https://upload.wikimedia.org/wikipedia/commons/b/b7/Japanese_Hiragana_kyokashotai_TA.png', 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Hiragana_%E3%81%9F_stroke_order_animation.gif'],
        kat15: ['https://upload.wikimedia.org/wikipedia/commons/b/b8/Japanese_Katakana_TA.png', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Katakana_%E3%82%BF_stroke_order_animation.gif'],
        hir16: ['https://upload.wikimedia.org/wikipedia/commons/a/ad/Japanese_Hiragana_kyokashotai_TI.png', 'https://upload.wikimedia.org/wikipedia/commons/3/32/Hiragana_%E3%81%A1_stroke_order_animation.gif'],
        kat16: ['https://upload.wikimedia.org/wikipedia/commons/5/5e/Japanese_Katakana_CHI.png', 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Katakana_%E3%83%81_stroke_order_animation.gif'],
        hir17: ['https://upload.wikimedia.org/wikipedia/commons/c/c9/Japanese_Hiragana_kyokashotai_TU.png', 'https://upload.wikimedia.org/wikipedia/commons/0/08/Hiragana_%E3%81%A4_stroke_order_animation.gif'],
        kat17: ['https://upload.wikimedia.org/wikipedia/commons/a/a3/Japanese_Katakana_TSU.png', 'https://upload.wikimedia.org/wikipedia/commons/7/73/Katakana_%E3%83%84_stroke_order_animation.gif'],
        hir18: ['https://upload.wikimedia.org/wikipedia/commons/9/96/Japanese_Hiragana_kyokashotai_TE.png', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Hiragana_%E3%81%A6_stroke_order_animation.gif'],
        kat18: ['https://upload.wikimedia.org/wikipedia/commons/1/1c/Japanese_Katakana_TE.png', 'https://upload.wikimedia.org/wikipedia/commons/9/90/Katakana_%E3%83%86_stroke_order_animation.gif'],
        hir19: ['https://upload.wikimedia.org/wikipedia/commons/0/07/Japanese_Hiragana_kyokashotai_TO.png', 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Hiragana_%E3%81%A8_stroke_order_animation.gif'],
        kat19: ['https://upload.wikimedia.org/wikipedia/commons/9/9b/Japanese_Katakana_TO.png', 'https://upload.wikimedia.org/wikipedia/commons/5/52/Katakana_%E3%83%88_stroke_order_animation.gif'],
        hir20: ['https://upload.wikimedia.org/wikipedia/commons/7/72/Japanese_Hiragana_kyokashotai_NA.png', 'https://upload.wikimedia.org/wikipedia/commons/8/83/Hiragana_%E3%81%AA_stroke_order_animation.gif'],
        kat20: ['https://upload.wikimedia.org/wikipedia/commons/c/c8/Japanese_Katakana_NA.png', 'https://upload.wikimedia.org/wikipedia/commons/8/87/Katakana_%E3%83%8A_stroke_order_animation.gif'],
        hir21: ['https://upload.wikimedia.org/wikipedia/commons/3/37/Japanese_Hiragana_kyokashotai_NI.png', 'https://upload.wikimedia.org/wikipedia/commons/2/27/Hiragana_%E3%81%AB_stroke_order_animation.gif'],
        kat21: ['https://upload.wikimedia.org/wikipedia/commons/6/6c/Japanese_Katakana_NI.png', 'https://upload.wikimedia.org/wikipedia/commons/2/29/Katakana_%E3%83%8B_stroke_order_animation.gif'],
        hir22: ['https://upload.wikimedia.org/wikipedia/commons/f/fa/Japanese_Hiragana_kyokashotai_NU.png', 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Hiragana_%E3%81%AC_stroke_order_animation.gif'],
        kat22: ['https://upload.wikimedia.org/wikipedia/commons/4/43/Japanese_Katakana_NU.png', 'https://upload.wikimedia.org/wikipedia/commons/1/12/Katakana_%E3%83%8C_stroke_order_animation.gif'],
        hir23: ['https://upload.wikimedia.org/wikipedia/commons/c/c0/Japanese_Hiragana_kyokashotai_NE.png', 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Hiragana_%E3%81%AD_stroke_order_animation.gif'],
        kat23: ['https://upload.wikimedia.org/wikipedia/commons/5/57/Japanese_Katakana_NE.png', 'https://upload.wikimedia.org/wikipedia/commons/1/14/Katakana_%E3%83%8D_stroke_order_animation.gif'],
        hir24: ['https://upload.wikimedia.org/wikipedia/commons/7/71/Japanese_Hiragana_kyokashotai_NO.png', 'https://upload.wikimedia.org/wikipedia/commons/0/05/Hiragana_%E3%81%AE_stroke_order_animation.gif'],
        kat24: ['https://upload.wikimedia.org/wikipedia/commons/c/c5/Japanese_Katakana_NO.png', 'https://upload.wikimedia.org/wikipedia/commons/6/64/Katakana_%E3%83%8E_stroke_order_animation.gif'],
        hir25: ['https://upload.wikimedia.org/wikipedia/commons/9/9a/Japanese_Hiragana_kyokashotai_HA.png', 'https://upload.wikimedia.org/wikipedia/commons/4/43/Hiragana_%E3%81%AF_stroke_order_animation.gif'],
        kat25: ['https://upload.wikimedia.org/wikipedia/commons/a/a8/Japanese_Katakana_HA.png', 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Katakana_%E3%83%8F_stroke_order_animation.gif'],
        hir26: ['https://upload.wikimedia.org/wikipedia/commons/9/9b/Japanese_Hiragana_kyokashotai_HI.png', 'https://upload.wikimedia.org/wikipedia/commons/4/40/Hiragana_%E3%81%B2_stroke_order_animation.gif'],
        kat26: ['https://upload.wikimedia.org/wikipedia/commons/c/c0/Japanese_Katakana_HI.png', 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Katakana_%E3%83%92_stroke_order_animation.gif'],
        hir27: ['https://upload.wikimedia.org/wikipedia/commons/3/3f/Japanese_Hiragana_kyokashotai_HU.png', 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Hiragana_%E3%81%B5_stroke_order_animation.gif'],
        kat27: ['https://upload.wikimedia.org/wikipedia/commons/4/4b/Japanese_Katakana_FU.png', 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Katakana_%E3%83%95_stroke_order_animation.gif'],
        hir28: ['https://upload.wikimedia.org/wikipedia/commons/f/fe/Japanese_Hiragana_kyokashotai_HE.png', 'https://upload.wikimedia.org/wikipedia/commons/4/40/Hiragana_%E3%81%B8_stroke_order_animation.gif'],
        kat28: ['https://upload.wikimedia.org/wikipedia/commons/4/4a/Japanese_Katakana_HE.png', 'https://upload.wikimedia.org/wikipedia/commons/7/70/Katakana_%E3%83%98_stroke_order_animation.gif'],
        hir29: ['https://upload.wikimedia.org/wikipedia/commons/6/6c/Japanese_Hiragana_kyokashotai_HO.png', 'https://upload.wikimedia.org/wikipedia/commons/9/96/Hiragana_%E3%81%BB_stroke_order_animation.gif'],
        kat29: ['https://upload.wikimedia.org/wikipedia/commons/0/0e/Japanese_Katakana_HO.png', 'https://upload.wikimedia.org/wikipedia/commons/9/95/Katakana_%E3%83%9B_stroke_order_animation.gif'],
        hir30: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Japanese_Hiragana_kyokashotai_MA.svg/1024px-Japanese_Hiragana_kyokashotai_MA.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/6/65/Hiragana_%E3%81%BE_stroke_order_animation.gif'],
        kat30: ['https://upload.wikimedia.org/wikipedia/commons/d/d7/Japanese_Katakana_MA.png', 'https://upload.wikimedia.org/wikipedia/commons/8/87/Katakana_%E3%83%9E_stroke_order_animation.gif'],
        hir31: ['https://upload.wikimedia.org/wikipedia/commons/6/60/Japanese_Hiragana_kyokashotai_MI.png', 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Hiragana_%E3%81%BF_stroke_order_animation.gif'],
        kat31: ['https://upload.wikimedia.org/wikipedia/commons/b/b1/Japanese_Katakana_MI.png', 'https://upload.wikimedia.org/wikipedia/commons/2/28/Katakana_%E3%83%9F_stroke_order_animation.gif'],
        hir32: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Japanese_Hiragana_kyokashotai_MU.svg/1024px-Japanese_Hiragana_kyokashotai_MU.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Hiragana_%E3%82%80_stroke_order_animation.gif'],
        kat32: ['https://upload.wikimedia.org/wikipedia/commons/f/f6/Japanese_Katakana_MU.png', 'https://upload.wikimedia.org/wikipedia/commons/4/40/Katakana_%E3%83%A0_stroke_order_animation.gif'],
        hir33: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Japanese_Hiragana_kyokashotai_ME.svg/1024px-Japanese_Hiragana_kyokashotai_ME.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/5/58/Hiragana_%E3%82%81_stroke_order_animation.gif'],
        kat33: ['https://upload.wikimedia.org/wikipedia/commons/6/6c/Japanese_Katakana_ME.png', 'https://upload.wikimedia.org/wikipedia/commons/0/00/Katakana_%E3%83%A1_stroke_order_animation.gif'],
        hir34: ['https://upload.wikimedia.org/wikipedia/commons/f/f5/Japanese_Hiragana_kyokashotai_MO.png', 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Hiragana_%E3%82%82_stroke_order_animation.gif'],
        kat34: ['https://upload.wikimedia.org/wikipedia/commons/a/a6/Japanese_Katakana_MO.png', 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Katakana_%E3%83%A2_stroke_order_animation.gif'],
        hir35: ['https://upload.wikimedia.org/wikipedia/commons/a/a6/Japanese_Hiragana_kyokashotai_YA.png', 'https://upload.wikimedia.org/wikipedia/commons/0/07/Hiragana_%E3%82%84_stroke_order_animation.gif'],
        kat35: ['https://upload.wikimedia.org/wikipedia/commons/a/a3/Japanese_Katakana_YA.png', 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Katakana_%E3%83%A4_stroke_order_animation.gif'],
        hir36: ['https://upload.wikimedia.org/wikipedia/commons/c/cc/Japanese_Hiragana_kyokashotai_YU.png', 'https://upload.wikimedia.org/wikipedia/commons/7/78/Hiragana_%E3%82%86_stroke_order_animation.gif'],
        kat36: ['https://upload.wikimedia.org/wikipedia/commons/0/0e/Japanese_Katakana_YU.png', 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Katakana_%E3%83%A6_stroke_order_animation.gif'],
        hir37: ['https://upload.wikimedia.org/wikipedia/commons/1/10/Japanese_Hiragana_kyokashotai_YO.png', 'https://upload.wikimedia.org/wikipedia/commons/8/80/Hiragana_%E3%82%88_stroke_order_animation.gif'],
        kat37: ['https://upload.wikimedia.org/wikipedia/commons/0/0f/Japanese_Katakana_YO.png', 'https://upload.wikimedia.org/wikipedia/commons/7/76/Katakana_%E3%83%A8_stroke_order_animation.gif'],
        hir38: ['https://upload.wikimedia.org/wikipedia/commons/2/20/Japanese_Hiragana_kyokashotai_RA.png', 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Hiragana_%E3%82%89_stroke_order_animation.gif'],
        kat38: ['https://upload.wikimedia.org/wikipedia/commons/c/ca/Japanese_Katakana_RA.png', 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Katakana_%E3%83%A9_stroke_order_animation.gif'],
        hir39: ['https://upload.wikimedia.org/wikipedia/commons/7/7d/Japanese_Hiragana_kyokashotai_RI.png', 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Hiragana_%E3%82%8A_stroke_order_animation.gif'],
        kat39: ['https://upload.wikimedia.org/wikipedia/commons/f/f3/Japanese_Katakana_RI.png', 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Katakana_%E3%83%AA_stroke_order_animation.gif'],
        hir40: ['https://upload.wikimedia.org/wikipedia/commons/c/c5/Japanese_Hiragana_kyokashotai_RU.png', 'https://upload.wikimedia.org/wikipedia/commons/2/26/Hiragana_%E3%82%8B_stroke_order_animation.gif'],
        kat40: ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Japanese_Katakana_RU.svg/1024px-Japanese_Katakana_RU.svg.png', 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Katakana_%E3%83%AB_stroke_order_animation.gif'],
        hir41: ['https://upload.wikimedia.org/wikipedia/commons/a/ab/Japanese_Hiragana_kyokashotai_RE.png', 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Hiragana_%E3%82%8C_stroke_order_animation.gif'],
        kat41: ['https://upload.wikimedia.org/wikipedia/commons/e/ec/Japanese_Katakana_RE.png', 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Katakana_%E3%83%AC_stroke_order_animation.gif'],
        hir42: ['https://upload.wikimedia.org/wikipedia/commons/7/70/Japanese_Hiragana_kyokashotai_RO.png', 'https://upload.wikimedia.org/wikipedia/commons/3/35/Hiragana_%E3%82%8D_stroke_order_animation.gif'],
        kat42: ['https://upload.wikimedia.org/wikipedia/commons/5/59/Japanese_Katakana_RO.png', 'https://upload.wikimedia.org/wikipedia/commons/6/62/Katakana_%E3%83%AD_stroke_order_animation.gif'],
        hir43: ['https://upload.wikimedia.org/wikipedia/commons/0/01/Japanese_Hiragana_kyokashotai_WA.png', 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Hiragana_%E3%82%8F_stroke_order_animation.gif'],
        kat43: ['https://upload.wikimedia.org/wikipedia/commons/5/5c/Japanese_Katakana_WA.png', 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Katakana_%E3%83%AF_stroke_order_animation.gif'],
        hir44: ['https://upload.wikimedia.org/wikipedia/commons/b/b7/Japanese_Hiragana_kyokashotai_WO.png', 'https://upload.wikimedia.org/wikipedia/commons/6/64/Hiragana_%E3%82%92_stroke_order_animation.gif'],
        kat44: ['https://upload.wikimedia.org/wikipedia/commons/5/53/Japanese_Katakana_WO.png', 'https://upload.wikimedia.org/wikipedia/commons/3/35/Katakana_%E3%83%B2_stroke_order_animation.gif'],
        hir45: ['https://upload.wikimedia.org/wikipedia/commons/7/77/Japanese_Hiragana_kyokashotai_N.png', 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Hiragana_%E3%82%93_stroke_order_animation.gif'],
        kat45: ['https://upload.wikimedia.org/wikipedia/commons/e/e6/Japanese_Katakana_N.png', 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Katakana_%E3%83%B3_stroke_order_animation.gif']

    }

    


    if(props.photoCode){

        return(
            <div className='card-container'>
                    {/* <img src={urlList[props.photoCode]} alt="" /> */}
                    {urlList[props.photoCode].map((url, index) => {
                        if (index === 1){
                            return (
                                <div className='individual-card-writing'>
                                    <img src={url} className='writing' key={index} alt="" />
                                </div>
                            )
                        }else{
                            return (
                                <FlipCard syllable={props.syllable}>
                                    <div className='individual-card'>
                                        <img src={url} key={index} alt="" />                                   
                                    </div>                        
                                </FlipCard>
                            )
                                
                                
                        }
                        
                    
                    })}
                    

            </div>
        )
    }else{
        return(
            <div className='card-container'>
                
            </div>
        )
    }
    
}