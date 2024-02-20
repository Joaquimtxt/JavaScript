//Exercício 1
console.log("Exercício 1");

var nome = "Jimmy";
var anoAtual = 2024;
var nascimento = 2000;

console.log("Nome da pessoa:", nome, "Ano de Nascimento:", nascimento);
var idade = anoAtual - nascimento;
console.log(nome, "Tem", idade, "anos.");

console.log("-----------------");
//Exercício 2
console.log("Exercício 2");
var retanguloC = 12;
var retanguloL = 6;
var area = retanguloC * retanguloL;

console.log(
  "Comprimento ",
  retanguloC,
  "| Largura ",
  retanguloL,
  "| Área ",
  area
);

console.log("-----------------");
//Exercício 3
console.log("Exercício 3");
var altura = 5;
var volume = altura * retanguloC * retanguloL;

console.log("Altura ", altura, "| Volume ", volume);

console.log("-----------------");
//Exercício 4
console.log("Exercício 4");
A = 2 ** 2;
B = 3;
C = -1;

var delta = B ** 2 - 4 * A * C;

console.log("Fórmula de delta é: B^2-4*ac");
console.log("A:", A, "B:", B, "C:", C);
console.log("Com esses valores, o valor de delta é:", delta);

console.log("-----------------");
//Exercício 5
console.log("Exercício 5");
var compra = 450;
var desconto = 3 / 100;
var valorNovo = 450 - compra * desconto;

console.log(
  "A compra foi de R$450,00, ao ter 3% de desconto, o valor será: R$",
  valorNovo
);
console.log("---------------------------");
//Exercíco 6
console.log("Exercício 6");
var velocidade = 95 / 3.6;
var tempo = 3.5 * 3600;
var espaçoI = 0;
var espaçoF = espaçoI + velocidade * tempo;

console.log("Um carro viaja por 3 horas e meia, a 95km/h, qual é o espaço percorrido?")
console.log("Velocidade de km/h para m/s:", velocidade, "| Tempo, de horas para segundos:", tempo, "| espaço inicial, é onde começou a viagem:", espaçoI)
console.log("A fórmula é S = S0 + Vt, onde determina o espaço, sendo o resultado do problema:", espaçoF);

var espaçoF = espaçoF / 1000;
console.log("Ou seja,",  espaçoF, "KM.");
console.log("-------------------------------------");
