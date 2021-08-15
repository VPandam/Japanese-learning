import React from 'react';
import './Card.css'

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
        hir5: ['https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Japanese_Hiragana_kyokashotai_KA.svg/1024px-Japanese_Hiragana_kyokashotai_KA.svg.png'],
        kat5: ['https://upload.wikimedia.org/wikipedia/commons/9/9a/Japanese_Katakana_KA.png'],
        hir6: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Japanese_Hiragana_kyokashotai_KI.svg/1024px-Japanese_Hiragana_kyokashotai_KI.svg.png'],
        kat6: ['https://upload.wikimedia.org/wikipedia/commons/d/de/Japanese_Katakana_KI.png'],
        hir7: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Japanese_Hiragana_kyokashotai_KU.svg/1024px-Japanese_Hiragana_kyokashotai_KU.svg.png'],
        kat7: ['https://upload.wikimedia.org/wikipedia/commons/9/90/Japanese_Katakana_KU.png'],
        hir8: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Japanese_Hiragana_kyokashotai_KE.svg/1024px-Japanese_Hiragana_kyokashotai_KE.svg.png'],
        kat8: ['https://upload.wikimedia.org/wikipedia/commons/6/60/Japanese_Katakana_KE.png'],
        hir9: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Japanese_Hiragana_kyokashotai_KO.svg/1024px-Japanese_Hiragana_kyokashotai_KO.svg.png'],
        kat9: ['https://upload.wikimedia.org/wikipedia/commons/8/83/Japanese_Katakana_KO.png'],
        hir10: ['https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Japanese_Hiragana_kyokashotai_SA.svg/1024px-Japanese_Hiragana_kyokashotai_SA.svg.png'],
        kat10: ['https://upload.wikimedia.org/wikipedia/commons/d/d2/Japanese_Katakana_SA.png'],
        hir11: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Japanese_Hiragana_kyokashotai_SI.svg/1024px-Japanese_Hiragana_kyokashotai_SI.svg.png'],
        kat11: ['https://upload.wikimedia.org/wikipedia/commons/3/3a/Japanese_Katakana_SHI.png'],
        hir12: ['https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Japanese_Hiragana_kyokashotai_SU.svg/1024px-Japanese_Hiragana_kyokashotai_SU.svg.png'],
        kat12: ['https://upload.wikimedia.org/wikipedia/commons/a/a4/Japanese_Katakana_SU.png'],
        hir13: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Japanese_Hiragana_kyokashotai_SE.svg/1024px-Japanese_Hiragana_kyokashotai_SE.svg.png'],
        kat13: ['https://upload.wikimedia.org/wikipedia/commons/4/45/Japanese_Katakana_SE.png'],
        hir14: ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Japanese_Hiragana_kyokashotai_SO.svg/1024px-Japanese_Hiragana_kyokashotai_SO.svg.png'],
        kat14: ['https://upload.wikimedia.org/wikipedia/commons/f/fc/Japanese_Katakana_SO.png'],
        hir15: ['https://upload.wikimedia.org/wikipedia/commons/b/b7/Japanese_Hiragana_kyokashotai_TA.png'],
        kat15: ['https://upload.wikimedia.org/wikipedia/commons/b/b8/Japanese_Katakana_TA.png'],
        hir16: ['https://upload.wikimedia.org/wikipedia/commons/a/ad/Japanese_Hiragana_kyokashotai_TI.png'],
        kat16: ['https://upload.wikimedia.org/wikipedia/commons/5/5e/Japanese_Katakana_CHI.png'],
        hir17: ['https://upload.wikimedia.org/wikipedia/commons/c/c9/Japanese_Hiragana_kyokashotai_TU.png'],
        kat17: ['https://upload.wikimedia.org/wikipedia/commons/a/a3/Japanese_Katakana_TSU.png'],
        hir18: ['https://upload.wikimedia.org/wikipedia/commons/9/96/Japanese_Hiragana_kyokashotai_TE.png'],
        kat18: ['https://upload.wikimedia.org/wikipedia/commons/1/1c/Japanese_Katakana_TE.png'],
        hir19: ['https://upload.wikimedia.org/wikipedia/commons/0/07/Japanese_Hiragana_kyokashotai_TO.png'],
        kat19: ['https://upload.wikimedia.org/wikipedia/commons/9/9b/Japanese_Katakana_TO.png'],
        hir20: ['https://upload.wikimedia.org/wikipedia/commons/7/72/Japanese_Hiragana_kyokashotai_NA.png'],
        kat20: ['https://upload.wikimedia.org/wikipedia/commons/c/c8/Japanese_Katakana_NA.png'],
        hir21: ['https://upload.wikimedia.org/wikipedia/commons/3/37/Japanese_Hiragana_kyokashotai_NI.png'],
        kat21: ['https://upload.wikimedia.org/wikipedia/commons/6/6c/Japanese_Katakana_NI.png'],
        hir22: ['https://upload.wikimedia.org/wikipedia/commons/f/fa/Japanese_Hiragana_kyokashotai_NU.png'],
        kat22: ['https://upload.wikimedia.org/wikipedia/commons/4/43/Japanese_Katakana_NU.png'],
        hir23: ['https://upload.wikimedia.org/wikipedia/commons/c/c0/Japanese_Hiragana_kyokashotai_NE.png'],
        kat23: ['https://upload.wikimedia.org/wikipedia/commons/5/57/Japanese_Katakana_NE.png'],
        hir24: ['https://upload.wikimedia.org/wikipedia/commons/7/71/Japanese_Hiragana_kyokashotai_NO.png'],
        kat24: ['https://upload.wikimedia.org/wikipedia/commons/c/c5/Japanese_Katakana_NO.png'],
        hir25: ['https://upload.wikimedia.org/wikipedia/commons/9/9a/Japanese_Hiragana_kyokashotai_HA.png'],
        kat25: ['https://upload.wikimedia.org/wikipedia/commons/a/a8/Japanese_Katakana_HA.png'],
        hir26: ['https://upload.wikimedia.org/wikipedia/commons/9/9b/Japanese_Hiragana_kyokashotai_HI.png'],
        kat26: ['https://upload.wikimedia.org/wikipedia/commons/c/c0/Japanese_Katakana_HI.png'],
        hir27: ['https://upload.wikimedia.org/wikipedia/commons/3/3f/Japanese_Hiragana_kyokashotai_HU.png'],
        kat27: ['https://upload.wikimedia.org/wikipedia/commons/4/4b/Japanese_Katakana_FU.png'],
        hir28: ['https://upload.wikimedia.org/wikipedia/commons/f/fe/Japanese_Hiragana_kyokashotai_HE.png'],
        kat28: ['https://upload.wikimedia.org/wikipedia/commons/4/4a/Japanese_Katakana_HE.png'],
        hir29: ['https://upload.wikimedia.org/wikipedia/commons/6/6c/Japanese_Hiragana_kyokashotai_HO.png'],
        kat29: ['https://upload.wikimedia.org/wikipedia/commons/0/0e/Japanese_Katakana_HO.png'],
        hir30: ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Japanese_Hiragana_kyokashotai_MA.svg/1024px-Japanese_Hiragana_kyokashotai_MA.svg.png'],
        kat30: ['https://upload.wikimedia.org/wikipedia/commons/d/d7/Japanese_Katakana_MA.png'],
        hir31: ['https://upload.wikimedia.org/wikipedia/commons/6/60/Japanese_Hiragana_kyokashotai_MI.png'],
        kat31: ['https://upload.wikimedia.org/wikipedia/commons/b/b1/Japanese_Katakana_MI.png'],
        hir32: ['https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Japanese_Hiragana_kyokashotai_MU.svg/1024px-Japanese_Hiragana_kyokashotai_MU.svg.png'],
        kat32: ['https://upload.wikimedia.org/wikipedia/commons/f/f6/Japanese_Katakana_MU.png'],
        hir33: ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Japanese_Hiragana_kyokashotai_ME.svg/1024px-Japanese_Hiragana_kyokashotai_ME.svg.png'],
        kat33: ['https://upload.wikimedia.org/wikipedia/commons/6/6c/Japanese_Katakana_ME.png'],
        hir34: ['https://upload.wikimedia.org/wikipedia/commons/f/f5/Japanese_Hiragana_kyokashotai_MO.png'],
        kat34: ['https://upload.wikimedia.org/wikipedia/commons/a/a6/Japanese_Katakana_MO.png'],
        hir35: ['https://upload.wikimedia.org/wikipedia/commons/a/a6/Japanese_Hiragana_kyokashotai_YA.png'],
        kat35: ['https://upload.wikimedia.org/wikipedia/commons/a/a3/Japanese_Katakana_YA.png'],
        hir36: ['https://upload.wikimedia.org/wikipedia/commons/c/cc/Japanese_Hiragana_kyokashotai_YU.png'],
        kat36: ['https://upload.wikimedia.org/wikipedia/commons/0/0e/Japanese_Katakana_YU.png'],
        hir37: ['https://upload.wikimedia.org/wikipedia/commons/1/10/Japanese_Hiragana_kyokashotai_YO.png'],
        kat37: ['https://upload.wikimedia.org/wikipedia/commons/0/0f/Japanese_Katakana_YO.png'],
        hir38: ['https://upload.wikimedia.org/wikipedia/commons/2/20/Japanese_Hiragana_kyokashotai_RA.png'],
        kat38: ['https://upload.wikimedia.org/wikipedia/commons/c/ca/Japanese_Katakana_RA.png'],
        hir39: ['https://upload.wikimedia.org/wikipedia/commons/7/7d/Japanese_Hiragana_kyokashotai_RI.png'],
        kat39: ['https://upload.wikimedia.org/wikipedia/commons/f/f3/Japanese_Katakana_RI.png'],
        hir40: ['https://upload.wikimedia.org/wikipedia/commons/c/c5/Japanese_Hiragana_kyokashotai_RU.png'],
        kat40: ['https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Japanese_Katakana_RU.svg/1024px-Japanese_Katakana_RU.svg.png'],
        hir41: ['https://upload.wikimedia.org/wikipedia/commons/a/ab/Japanese_Hiragana_kyokashotai_RE.png'],
        kat41: ['https://upload.wikimedia.org/wikipedia/commons/e/ec/Japanese_Katakana_RE.png'],
        hir42: ['https://upload.wikimedia.org/wikipedia/commons/7/70/Japanese_Hiragana_kyokashotai_RO.png'],
        kat42: ['https://upload.wikimedia.org/wikipedia/commons/5/59/Japanese_Katakana_RO.png'],
        hir43: ['https://upload.wikimedia.org/wikipedia/commons/0/01/Japanese_Hiragana_kyokashotai_WA.png'],
        kat43: ['https://upload.wikimedia.org/wikipedia/commons/5/5c/Japanese_Katakana_WA.png'],
        hir44: ['https://upload.wikimedia.org/wikipedia/commons/b/b7/Japanese_Hiragana_kyokashotai_WO.png'],
        kat44: ['https://upload.wikimedia.org/wikipedia/commons/5/53/Japanese_Katakana_WO.png'],
        hir45: ['https://upload.wikimedia.org/wikipedia/commons/7/77/Japanese_Hiragana_kyokashotai_N.png'],
        kat45: ['https://upload.wikimedia.org/wikipedia/commons/e/e6/Japanese_Katakana_N.png']

    }


    if(props.photoCode){

        return(
            <div className='card-container'>
                <div className='cards'>
                    {/* <img src={urlList[props.photoCode]} alt="" /> */}
                    {urlList[props.photoCode].map((url, index) => {
                        if (index === 1){
                            return <img src={url} className='writing' key={index} alt="" />
                        }else{
                            return <img src={url} key={index} alt="" />
                        }
                        
                    
                    })}
                    

                </div>

            </div>
        )
    }else{
        return(
            <div className='card-container'>
                
            </div>
        )
    }
    
}