const contadorDias = document.querySelector('#days');
const contadorHoras = document.querySelector('#hours');
const contadorMinutos = document.querySelector('#minutes');
const contadorSegundos = document.querySelector('#seconds');

const linhaPrincipal = document.querySelector('#linhaPrincipal');




const anoNovoTempo = new Date('December 01 2022 11:01:00');
//const anoNovoTempo = new Date('January 01 2023 00:00:00');

const getValor = unit => unit < 10 ? '0' + unit : unit

const inserirZeros = ({days, hours, minutes, seconds}) => {
    contadorDias.textContent = getValor(days);
    contadorHoras.textContent = getValor(hours);
    contadorMinutos.textContent = getValor(minutes);
    contadorSegundos.textContent = getValor(seconds);
}

const updateCountdown = () => {

    

    const currentTime = new Date();
    const difference = anoNovoTempo - currentTime;

    if (difference > 0) {

    const seconds = Math.floor(difference / 1000) % 60;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    
    contadorSegundos.textContent = seconds;
    contadorMinutos.textContent = minutes;
    contadorHoras.textContent = hours;
    contadorDias.textContent = days;

    inserirZeros({days, hours, minutes, seconds})

    // if(seconds < 10) {
    // contadorSegundos.textContent = '0' + seconds;
    
    // }

    }else{

        clearInterval(interval)
        console.log(linhaPrincipal)
        //linhaPrincipal.classList.remove('bg-secondary')
        linhaPrincipal.classList.add('bg-success')
    }

    

    
    
    
    // console.log({days, hours, minutes, seconds})
}

//setTimeout(updateCountdown, 1000)
const interval = setInterval(updateCountdown, 1000);