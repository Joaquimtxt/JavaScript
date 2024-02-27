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

dinos.shift();//remove o primeiro elemento
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a partir do índice 1, contando 1.
console.table(dinos);
console.table(dinos);
