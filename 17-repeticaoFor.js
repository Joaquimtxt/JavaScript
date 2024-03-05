// //Laço de repetição FOR
// //escrever para o usuário 1000x "Prestar mais atenção nas aulas!"

// for (let i = 0; i <= 1000; i += 2) {
//   console.log(i);
// }

// //Mostrando números impares com IF
// for (let i = 0; i <= 1000; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// //Escreva todos os números de 1 a 20 com FOR
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// for (let n = 1; n <= 20; n++) {
// (n % 2 == 0 ? console.log(n) : console.log("") );
// }

// for (let n = 2; n <= 20; n += 2) {
//   console.log(n);
// }

//Dado um vetor com números 5,6,8,14,0,9,7,2
//Calcule e exiba a somatíria de seus elementos utilizando o for

// Declarando a array
// var numeros = [5, 6, 8, 14, 0, 9, 7, 2];

// // Variável
// var somar = 0;

// // Looping
// for (let i = 0; i < numeros.length; i++) {
//   somar += numeros[i];
// }
// console.log(`A somatória dos numeros da array é: ${somar}`);

// // Dado um vetor com números 5,6,8,14,0,9,7,2
// // Multiplique todos os eus elementos por 3 utilizando o loop for
// //Em seguida, mostre o novo vetor.
// console.table(numeros);

// for (let i = 0; i < numeros.length; i++) {
//   numeros[i] = numeros[i] * 3;
// }
// console.table(numeros);

//Dada a matriz 2x3, escrever para o usuário todos os seus elementos
//Com as respectivas posições da matriz
//[8,4,1]
//[3,7,8]

var matriz = [
[8,4,1],
[3,7,8],
];
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++) {
  for (let coluna = 0; coluna < matriz[0].length; coluna++){
    console.log(`Matriz[ ${linha},${coluna}] = ${matriz[linha][coluna]}`);
}
}