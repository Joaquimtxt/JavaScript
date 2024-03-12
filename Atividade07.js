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

var jogo = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let jogadorX = "X";
let jogadorO = "O";

function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (jogo[linha][coluna] !== "");
  jogo[linha][coluna] = jogador;
}

for (var i = 0; i < 9; i++) {
  if (i % 2 == 0) {
    jogar(jogadorX);
    console.table(jogo);
  } else {
    jogar(jogadorO);
    console.table(jogo);
  }
}

console.table(jogo);

for (var i = 0; i < 3; i++) {
  switch (true) {
    case jogo[i][0] == jogo[i][1] && jogo[i][1] == jogo[i][2]: {
      if (jogo[i][0] == "X") {
        console.log(`O Jogador X venceu`);
        return
      } else {
        console.log(`O Jogador O venceu`);
        return
      }
    }
    case jogo[0][i] == jogo[1][i] && jogo[1][i] == jogo[2][i]: {
      if (jogo[0][i] == "X") {
        console.log(`O Jogador X venceu`);
        return

      } else {
        console.log(`O Jogador O venceu`);
        return

      }
    }
    case jogo[0][0] == jogo[1][1] && jogo[1][1] == jogo[2][2]: {
      if (jogo[i][i] === "X") {
        console.log(`O Jogador X venceu`);
        return

      } else {
        console.log(`O Jogador O venceu`);
        return

      }
    }
    case jogo[0][2] == jogo[1][1] && jogo[1][i] == jogo[2][0]: {
      if (jogo[i][i] === "X") {
        console.log(`O Jogador X venceu`);
        return

      } else {
        console.log(`O Jogador O venceu`);
        return

      }
    }
    default: {
      console.log("Deu Empate");
      return

    }
  }
}

// for (let i = 0; i <= jogo.length; i++) {
//   jogar(jogadorX);
//   jogar(jogadorO);
//         break;
//     }
//     switch (jogo) {
//       case [0,0][0,1][0,2] == "X":
//         case [0,0][1,1][2,2] == "X":
//           case [0,0][1,0][2,0] == "X":
//             case [0,1][1,1][1,2] == "X":
//               case [0,2][1,2][2,2] == "X":
//                 case [1,0][1,1][1,2] == "X":
//                   case [2,0][2,1][2,2] == "X":
//                 console.log("Você ganhou!");
//                 case [0,0][0,1][0,2] == "O":
//                   case [0,0][1,1][2,2] == "O":
//                     case [0,0][1,0][2,0] == "O":
//                       case [0,1][1,1][1,2] == "O":
//                         case [0,2][1,2][2,2] == "O":
//                           case [1,0][1,1][1,2] == "O":
//                             case [2,0][2,1][2,2] == "O":
//                               console.log("Você perdeu");
//         break;

//       default:
//         console.log("Empate")
//     }
// console.table(jogo);
