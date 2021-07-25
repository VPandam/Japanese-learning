import react from 'react'

let hora = 0
let minutos = 0
let segundos = 0
let tiempo = ''
let stop = true
export default class Chrono extends react.Component{

    iniciarCronometro () {
        console.log(stop)
        if (stop === true) {
            console.log("putito")
			stop = false
			this.cronometro()
            
		}
    }
    
    llamarCronometro(){
        this.cronometro();
    }
    cronometro() {
        
        if (stop === false) {
            segundos++

            if (segundos > 59) {
                segundos = 0
                minutos++
            }
            if (minutos > 59) {
                minutos = 0
                hora++
            }
            console.log(segundos, minutos)
            this.verCronometro();
            setTimeout(() => {    
                this.llamarCronometro();

              }, 1000);
        }
    }

    verCronometro() {
       
        if (hora < 10) tiempo = ''
        else tiempo = hora
        if (minutos < 10) tiempo = tiempo + '0'
        tiempo = tiempo + minutos + ':'
        if (segundos < 10) tiempo = tiempo + '0'
        tiempo = tiempo + segundos
        document.getElementById('time').innerHTML = "Time " + tiempo
    }
    
    PausarTiempo() {
        stop = true
    }
    ReiniciarTiempo() {
        
        hora = minutos = segundos  = 0
        tiempo = ''
        this.verCronometro()
    }
    componentDidMount(){
        // this.iniciarCronometro();
    }
    render(){
        return(
            <div className ='chrono'>
                <p id='time'>Time 00:00</p>
            </div> 
        )
    }
}