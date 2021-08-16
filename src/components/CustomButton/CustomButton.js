import './CustomButton.css'

export default function CustomButton (props){
    
    const changeClassType = () => {
        let clickedButtons = Array.from(document.getElementsByClassName('buttonType'));
        let buttonClick = document.getElementById(props.id);
        console.log(buttonClick)
        

        clickedButtons.forEach(buttonType => {
            if (buttonType.classList.contains('clicked')){

                buttonType.classList.toggle('clicked');
            }
        });
        buttonClick.classList.toggle('clicked')
    }

    const changeClassLvl = () => {
        let clickedButtons = Array.from(document.getElementsByClassName('buttonlvl'));
        let buttonClick = document.getElementById(props.id);
        console.log(buttonClick)
        

        clickedButtons.forEach(buttonType => {
            if (buttonType.classList.contains('clicked')){

                buttonType.classList.toggle('clicked');
            }
        });
        buttonClick.classList.toggle('clicked')
    }


    if(props.button === 'Type'){
        return (
            <button className={`button${props.button} button`} onClick={() => {
                props.click();
                changeClassType();
            }} id={props.id}> {props.children} </button>
        )
    }else if(props.button === 'lvl'){
        return (
            <button className={`button${props.button} button`} onClick={() => {
                props.click();
                changeClassLvl();
            }} id={props.id}> {props.children} </button>
        )
    }else{
        return <button className={`${props.button} button`} onClick={props.click} id={props.id}> {props.children} </button>
    }
    
}