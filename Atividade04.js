var matriz = [
  [6, 7, 8],
  [7, 8, 9],
  [9, 10, 11],
];
console.table(matriz);

console.log(
  "Diagonal (0,0) - (1,1) - (2,2): " +
    matriz[0][0] +
    " " +
    matriz[1][1] +
    " " +
    matriz[2][2]
);

console.log(
  "Diagonal (2,2) - (1,1) - (0,0): " +
    matriz[2][2] +
    " " +
    matriz[1][1] +
    " " +
    matriz[0][0]
);

console.log(
  "Diagonal (2,0) - (1,2) - (2,0): " +
    matriz[2][0] +
    " " +
    matriz[1][1] +
    " " +
    matriz[0][2]
);

console.log(
  "Diagonal (2,0) - (1,2) - (2,0): " +
    matriz[0][2] +
    " " +
    matriz[1][1] +
    " " +
    matriz[2][0]
);

//Cadastro básico
//Nome
//idade
// Cor favorita
//Fruta favorita
//Endereço
//Nome do Pet
var usuario = [
  ["Joaquim", "Rua dos bobos", "Maizena", "16", "Mamão", "Azul"],
  ["Luiz", "Rua bonita", "Pipoca", "17", "Maçã", "Vermelho"],
  ["Ryan", "Rua das flores", "Bolinha", "Banana", "Amarelo"],
];

console.table(usuario);

console.log("Olá " + usuario[0][0] + "! Seja bem-vindo ao nosso sistema.");

console.log(
  "Você mora no Endereço " +
    usuario[0][1] +
    ", e tem um pet chamado " +
    usuario[0][2] +
    "."
);
console.log(
  "Sua idade é " +
    usuario[0][3] +
    " e gosta muito da fruta " +
    usuario[0][4] +
    "."
);
console.log("Sua cor favorita é " + usuario[0][5]+".");
