//Selecionando os Dias, horas, minutos e segundos

const contadorDias = document.querySelector('#days');
const contadorHoras = document.querySelector('#hours');
const contadorMinutos = document.querySelector('#minutes');
const contadorSegundos = document.querySelector('#seconds');

//Selecionando a primeira linha da tabela
const linhaPrincipal = document.querySelector('#linhaPrincipal');

//Seleciona a data "alvo"(Ano novo de 2023)
const anoNovoTempo = new Date('January 01 2023 00:00:00');

//Adicionando um '0' quando o contador for menor que 10
const getValor = unit => unit < 10 ? '0' + unit : unit

const inserirZeros = ({days, hours, minutes, seconds}) => {
    contadorDias.textContent = getValor(days);
    contadorHoras.textContent = getValor(hours);
    contadorMinutos.textContent = getValor(minutes);
    contadorSegundos.textContent = getValor(seconds);
}

//Implementacao da funcao de contagem regressiva
const updateCountdown = () => {

    const currentTime = new Date();
    const difference = anoNovoTempo - currentTime;

//Vai executar a funcao somente de a diferenca entre a data 'alvo' e a atual for maior que zero
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

//Vai chamar a funcao e adicionar a cor verde na primeira linha da tabela
        clearInterval(interval)
        linhaPrincipal.classList.add('bg-success')
    }
}

//setTimeout(updateCountdown, 1000)
const interval = setInterval(updateCountdown, 1000);