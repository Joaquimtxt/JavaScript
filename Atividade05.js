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
function distPossivel(combustivel) {
  return combustivel * 12;
}
var litros = 58;
console.log(
  `Com ${litros} litros no tanque, você poderá andar ${distPossivel(58)}km`
);
