//01-Criar array
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Morango"];
console.table(frutas);
//02-Adicionar Tangerina
frutas.push("Tangerina");
console.table(frutas);
//Adicionar Goiaba no ínicio
frutas.unshift("Goiaba");
console.table(frutas);

console.log("Fruta na quinta posição:", frutas[5]);
//Excluir Tangerina
frutas.pop("Tangerina");
console.table(frutas);

console.log(frutas[5]);
//Excluir Uva
var position = frutas.indexOf("Uva");
frutas.splice(position, 1);
console.log(frutas);

//Copiar
var frutasCopy = frutas.slice(2, 5);
console.table(frutasCopy);

//Continuação vetores numéricos
console.log("----Atividade 2----");
var numeros = [10, 21, 32, 43, 54];
console.table(numeros);
console.log("O terceiro elemento é o: " + numeros[3]);

var numerosCopy = numeros.slice();
console.table(numerosCopy);

//var numerosCopy = [[10*2],[21*2],[32*2],[43*2],[54*2]];
//console.table(numerosCopy);

//var numerosCopy = numerosCopy.map((x)=> x * 2);
numerosCopy[0] = numeros[0] * 2;
numerosCopy[1] = numeros[1] * 2;
numerosCopy[2] = numeros[2] * 2;
numerosCopy[3] = numeros[3] * 2;
numerosCopy[4] = numeros[4] * 2;
console.table(numerosCopy);
