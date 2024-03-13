//Criando um objeto do tipo data
var data1 = new Date();
console.log(data1);

//Criando um objeto do tipo "data" com data específica Date()
const data2 = new Date("2001-9-11");
console.log(data2);

//Extraindo partes de uma data
var data3 = new Date("2007=08-10");
console.log(`Data: ${data3}`);
console.log(`Ano: ${data3.getFullYear()}`);
console.log(`Mês: ${data3.getMonth() + 1}`);
console.log(`Dia: ${data3.getDate()}`);

const mes = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
console.log("Retornando o Mês por escrito");
console.log(`Mês: ${mes[data3.getMonth()]}`);

const diaDaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
console.log("Retornando o dia da semana");
console.log(`Dia da semana: ${diaDaSemana[data3.getDay()]}`);

const diferencaEmMilisegundos = data1.getTime() - data3.getTime();

const idadeEmAnos = Math.floor(
  diferencaEmMilisegundos / (1000 * 60 * 60 * 24 * 365.25)
);

console.log(`Sua idade é de ${idadeEmAnos} anos.`);

console.log(`--------------------------------------------`);

const diferencaAnos = data1.getFullYear() - data3.getFullYear();
console.log(`Diferença em anos:${diferencaAnos}`);
if (
  data1.getMonth() < data3.getMonth() ||
  (data1.getMonth() === data3.getMonth() && data1.getDate() < data3.getDate())
) {
  console.log(`Ainda não fez aniversário!`);
  console.log(`Idade: ${diferencaAnos - 1}`);
}
