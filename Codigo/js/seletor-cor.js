 const botao = document.querySelector('#visualizar');
// botao.addEventListener('click', function() {
//   console.log('O botao foi clicado');
// })

// const ler = document.querySelector('#cor');
// ler.addEventListener('click', function() {
//   console.log('cor')
// })


 botao.addEventListener('click', function() {
  const caixa = document.querySelector('#cor');
  const cor = caixa.value;
  console.log(cor);


  const body = document.querySelector('body');
  body.style.backgroundColor = cor;

  if (body.style.backgroundColor !== cor) {
    console.log('Algo deu errado');
    alert('Por gentileza use cores do css!!!');

  }

 })

// 1. Ler a cor escolhida pelo usuario;
// const caixa = document.querySelector('#cor');
// const cor = caixa.value;
// console.log(cor);


// 2. Aplicar no background escolhido pelo usuario
//const body = document.querySelector('body');
//body.style.backgroundColor = cor;

// 3. Exibir mensagem de erro, caso tenha acontecido
// if (body.style.backgroundColor !== cor) {
//   console.log('Algo deu errado');
//   alert('Por gentileza use cores do css!!!');

// }
