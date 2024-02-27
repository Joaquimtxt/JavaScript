//const numeros = [ 1, 2, 3, 4, 5];
// console.log(numeros);
// console.log(numeros[2]);

// numeros[2] = 6;
// console.log(numeros);
// console.log(numeros[2]);

//Criando variáveis do tipo array(vetores)

var dinos = ["Tiranossauro Rex", "Estercossauro", "Anquilossauro"];
console.log(dinos); // retorna todos os itens do array
console.log(dinos[0]); // retorna o primeiro item do array

console.log("--------------------");

console.table(dinos); //cria tabela com os itens do array
console.log(dinos.length);
console.log("O vetor tem", dinos.length, "elementos!");

//adicionando elementos ao vetor existente

dinos.push("Brontossauro"); //array.push adiciona um item no final do vetor
console.table(dinos);

dinos.unshift("Crisserátops"); //adiciona itens no inicio do array

dinos[3] = "Titanossauro";
console.table(dinos); //alterando elementos com base do índice(posição)

//Obtendo um elemento com base em seu índice
console.log("Primeira posição:", dinos[0]);
console.log("Segunda posição:", dinos[1]);
console.log("Item da posição 20:", dinos[20]);

//Removendo elementos do vetor
dinos.pop(); //remove o último elemento
console.table(dinos);

dinos.shift(); //remove o primeiro elemento
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a partir do índice 1, contando 1.
console.table(dinos);
console.table(dinos);

console.log("");
console.log("--------------continuação da aula--------------");
var dinos = [
  "Triceratops",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
  "Ictiossauro",
  "Pterodáctilo",
  "Espinossauro",
];

console.table(dinos);

var elementoProcurado = "Brontossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Tiranossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);


var elementoProcurado = "Triceratops";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Pterodáctilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

//criando cópia de array (vetor)
var copia1 = dinos.slice();//.slice() faz uma cópia real do item de vetor
console.log("Vetor cópia 1")
console.table(copia1);

var copia2 = dinos.slice(1,3);//.slice(1,3) determino onde começa e onde termina a cópia
console.log("Vetor copia 2");
console.table(copia2);