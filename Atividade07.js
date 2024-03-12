// var populacaoA = Math.random() * 30000;
// var populacaoB = Math.random() * 100000;
// const porcentagemA = 0.03;
// const porcentagemB = 0.015;
// var anos = 0;
// console.log(
//   Math.round(populacaoA) +
//     "= População A | População B = " +
//     Math.round(populacaoB)
// );
// while (populacaoA < populacaoB) {
//   populacaoA += populacaoA * porcentagemA;
//   populacaoB += populacaoB * porcentagemB;

//   console.log(
//     `População A --> ${Math.round(
//       populacaoA
//     )} pessoas | População B --> ${Math.round(populacaoB)} pessoas`
//   );

//   anos++;
//   if (populacaoB <= populacaoA) {
//     console.log(
//       `Depois de ${anos} anos, o País A terá população maior que o País B`
//     );
//     break;
//   }
// }
// console.log(`-----------------------------------`);
// console.log(`        Correção da atividade      `);
// console.log(`-----------------------------------`);
// //Correção
// var popA = 100003;
// var popB = 300004;
// var ano = 0;

// console.log(`PopA = ${popA} PopB =${popB}`);

// while (popA < popB) {
//   ano++;
//   popA *= 1.03;
//   popB *= 1.015;
// }
// console.log(
//   `A população A (${Math.round(popA)}) irá passar a população B (${Math.round(
//     popB
//   )}) em ${ano} anos!`
// );

// console.log(`-----------------------------------`);
// console.log(`-----------------------------------`);
// console.log(`-----------------------------------`);
// console.log(`-----------------------------------`);
// console.log(`-----------------------------------`);
// console.log(`      JOGO DA VELHA RANDÔMICO      `);

// console.log(`_____|_____|_____`);
// console.log(`_____|_____|_____`);
// console.log(`     |     |     `);

const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let jogadorAtual = "X";

function jogar(jogador) {
  let linha, coluna;

  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
  jogadorAtual = jogadorAtual === "X" ? "O" : "X";
}

function verificaVencedor() {
  for (let i = 0; i < 3; i++) {
    if (
      //Verifica coluna
      tabuleiro[0][i] === tabuleiro[1][i] &&
      tabuleiro[1][i] === tabuleiro[2][i] &&
      tabuleiro[1][i] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[1][i]} ganhou`);
      return tabuleiro[1][i];
    } else if (
      //Verifica linha
      tabuleiro[i][0] === tabuleiro[i][1] &&
      tabuleiro[i][1] === tabuleiro[i][2] &&
      tabuleiro[i][1] !== " "
    ) {
      console.log(`O jogador ${tabuleiro[i][1]} ganhou`);
      return tabuleiro[i][1];
    }
  }
  if (
    // Vefifica diagonal
    tabuleiro[0][0] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][2] &&
    tabuleiro[1][1] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[1][1]} ganhou`);
    return tabuleiro[1][1];
  } else if (
    // Vefifica diagonal
    tabuleiro[0][2] === tabuleiro[1][1] &&
    tabuleiro[1][1] === tabuleiro[2][0] &&
    tabuleiro[1][1] !== " "
  ) {
    console.log(`O jogador ${tabuleiro[1][1]} ganhou`);
    return tabuleiro[1][1];
  }

  if (!tabuleiro.some((event) => event.includes(" "))) {
    console.log("O jogo empatou");
    return "Empate";
  }
  return "";
}

let vencedor = "";

while (!vencedor) {
  jogar(jogadorAtual);
  console.table(tabuleiro);
  vencedor = verificaVencedor();

  if (!vencedor) {
    jogar(jogadorAtual);
    console.table(tabuleiro);
    vencedor = verificaVencedor();
  }
}