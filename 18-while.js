// let contador = 0;

// while (contador < 5) {
//     contador++;
//   console.log(contador);
// }

var countdown = 5;

while (countdown >= 0) {
  console.log(countdown);
  countdown--;
}
console.log(`Lançamento!`);

let contador = 0;

while (contador <= 5) {
  console.log(contador);
  contador++;
}

//Estourando o limite do cartão - versão while
var limite = 500;
var fatura = 0;

while (fatura <= limite) {
    let gasto = Math.random() * 100
    fatura += gasto
    console.log(`Gastei R$ ${gasto.toFixed(2)}------ Fatura: R$ ${fatura.toFixed(2)}`);
    fatura > limite && console.log(`Estourou o limite do cartão`)

}

//Estourando o limite do cartão - versão do while
console.log("__________________________________________________________")
var limite = 500;
var fatura = 0;

do {
    let gasto = Math.random() * 100
    fatura += gasto
    console.log(`Gastei R$ ${gasto.toFixed(2)}------ Fatura: R$ ${fatura.toFixed(2)}`);
    fatura > limite && console.log(`Estourou o limite do cartão`)


} while (fatura <= limite);