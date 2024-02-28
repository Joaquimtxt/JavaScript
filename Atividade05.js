//função que receba como parâmetro o ano de nascimento de uma pessoa e retorne sua idade
function Idade(anoNasc, anoAtual) {
  return anoAtual - anoNasc;
}

var Ano = new Date();
var actyear = Ano.getFullYear();
var bornyear = 1998;
console.log(
  `Estamos no ano de ${actyear}, e a pessoa nasceu em ${bornyear}, logo sua idade é de: ${
    actyear - bornyear
  }`
);

//Função que receba qtd de combustivel de um carro e retorne qnts Kms ele pode viajar com esse combustível. Considere que o veículo faz uma média de 12 Kms
function distPossivel(combustivel, kml) {
  return combustivel * kml;
}
var litros = 58;
console.log(
  `Com ${litros} litros no tanque, você poderá andar ${distPossivel(58, 12)}km`
);
console.log(`Carro 1: 45L -> Percorre ${distPossivel(45, 6)}`);
console.log(`Carro 2: 60L -> Percorre ${distPossivel(60, 14)}`);

console.log("-----------------------------------------------");
function Idadevoto(anoNasc, anoAtual) {
  return anoAtual - anoNasc;
}

var Ano = new Date();
var actyear = Ano.getFullYear();
var bornyear = 1988;
var idade = actyear - bornyear;
console.log(
  `Estamos no ano de ${actyear}, e a pessoa nasceu em ${bornyear}, logo sua idade é de: ${
    actyear - bornyear
  }`
);
var maioridade =
  idade < 16 || idade > 85 ? "Você não pode votar" : "Você pode votar";
console.log(maioridade);
