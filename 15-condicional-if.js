// var anoNascimento = 2003;

// if (anoNascimento > 2003) console.log(`A pessoa nasceu depois de 2003`);
// if (anoNascimento < 2003) console.log(`A pessoa nasceu antes de 2003`);
// if (anoNascimento == 2003) console.log(`A pessoa nasceu em 2003!`);

//teste
var Ano = new Date();
var actyear = Ano.getFullYear();
var bornyear = 1888;
var edede = actyear - bornyear;
console.log(
  `Estamos no ano de ${actyear}, e a pessoa nasceu em ${bornyear}, logo sua idade é de: ${
    actyear - bornyear
  }`
);
var maioridade = edede < 18 ? "Você é menor de idade" : "Você é maior de idade";
console.log(maioridade);

console.log(
  "------------------------------------------------------------------------------"
);

//Condicional simples if-else
var anoNascimento = 2002;

if (anoNascimento > 2000) console.log(`A pessoa nasceu depois de 2000!`);
else console.log(`A pessoa nasceu Antes de 2000!`);

//Condicional composto com if
const login = "admin"; //digitado pelo usuario
var senha = "123456"; //digitado pelo usuario

//-------------------------------------------------//
const loginUser = "admin"; //banco de dados
const senhaUser = "admin"; //banco de dados
//-------------------------------------------------//

if (login == loginUser && senha == senhaUser)
  // && significa E -- || significa OU
  console.log("Acesso permitido!");
else console.log(`Acesso negado, errou a senha bobalhão!`);

//função sinaleiro
function sinaleiro(cor) {
  if (cor == "vermelho") console.log(`Pare`);
  else if (cor == "amarelo") console.log(`Preste atenção`);
  else if (cor == "verde") console.log(`Siga`);
  else
    console.log(`Você informou cores diferentes de verde, amarelo ou vermelho`);
}
sinaleiro("vermelho");

//desvio condiconal if com bloco de comandos
console.log(`------------------------------------`);

var idade = 18;

if (idade <= 18) {
  console.log("entrou no if...");
  idade++, console.log("Incrementei a idade...");
  console.log(`A nova idade é ${idade}`);
  console.log(`Agora estou saindo do bloco de codigos if`);
}
console.log(`Terminei!`);

//desvio condicional if inline (ternario)
//validação (algo == algo) ou (algo > algumacoisa)
//? (IF)
//Termos de aceite do IF (se for verdadeiro)
//: (ELSE)
//Termos de não aceito se for falso
var preco = 500;

var resultado = preco <= 100 ? "tá barato" : "Vish tá caro";
console.log(resultado);
