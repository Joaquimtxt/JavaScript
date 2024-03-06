// let contador = 0;

// while (contador < 5) {
//     contador++;
//   console.log(contador);
// }

// var countdown = 5;

// while (countdown >= 0) {
//   console.log(countdown);
//   countdown--;
// }
// console.log(`Lançamento!`);

// let contador = 0;

// while (contador <= 5) {
//   console.log(contador);
//   contador++;
// }

// //Estourando o limite do cartão - versão while
// var limite = 500;
// var fatura = 0;

// while (fatura <= limite) {
//     let gasto = Math.random() * 100
//     fatura += gasto
//     console.log(`Gastei R$ ${gasto.toFixed(2)}------ Fatura: R$ ${fatura.toFixed(2)}`);
//     fatura > limite && console.log(`Estourou o limite do cartão`)

// }

// //Estourando o limite do cartão - versão do while
// console.log("__________________________________________________________")
// var limite = 500;
// var fatura = 0;

// do {
//     let gasto = Math.random() * 100
//     fatura += gasto
//     console.log(`Gastei R$ ${gasto.toFixed(2)}------ Fatura: R$ ${fatura.toFixed(2)}`);
//     fatura > limite && console.log(`Estourou o limite do cartão`)

// } while (fatura <= limite);

//Jogo de cara e coroa - melhor de três tentativas competição - 3 var cara ou coroa -> aleatória
//placar - vitórias e derrotas

var round = 1;
var moeda = "";
var escolhaJogador = "";
var vitoria = 0;
var derrota = 0;

while (round <= 3) {
  moeda = Math.random() >= 0.5 ? "Cara" : "Coroa"//Se Math.random for maior ou igual a 0.5, cai cara, se não, Coroa
  escolhaJogador = Math.random() >= 0.5 ? "Cara" : "Coroa";//A escolha do Jogador é pra na frente fazer a comparação

  if (escolhaJogador == moeda) { //Aqui está sendo feita a comparação, se for igual vai dar vitória pro jogador
    console.log(`Parabéns, você ganhou!`);
    vitoria++;
  } else {
    console.log(`Que pena, você perdeu!`);
    derrota++; // Se não dá derrota
  }
  console.log(moeda + " | " + escolhaJogador);
  round++;
}

console.log(`-----------------------------------`);
console.log(`             Placar                      `);
console.log(`-----------------------------------`);
console.log(`Vitórias: ${vitoria}`);
console.log(`Derrotas: ${derrota}`);
console.log(`${vitoria > derrota ? "Você ganhou!" : "Você perdeu!"}`);
