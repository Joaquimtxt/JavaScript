// Criar uma classe Aluno em JavaScript que represente um aluno em uma instituição de ensino.
//A classe deve receber informações do aluno, calcular sua idade e apresentar-se como métodos.

// Requisitos:
// A classe Aluno deve ter os seguintes atributos:
// ra: Número de Registro do Aluno (string)
// nome: Nome completo do aluno (string)
// dataNascimento: Data de nascimento do aluno (data)
// curso: Curso do aluno (string)

// A classe Aluno deve ter os seguintes métodos:
// calcularIdade(): Calcula e retorna a idade do aluno em anos.
// apresentar(): Exibe as informações do aluno no formato:

class Aluno {
  constructor(nome, ra, nascimento, curso) {
    this.nome = nome;
    this.ra = ra;
    this.nascimento = nascimento;
    this.curso = curso;
  }
  calcularIdade() {
    return 2024 - this.nascimento;
  }
  apresentarSE() {
    console.log(`Meu nome é ${
      this.nome
    }, tenho ${this.calcularIdade()} anos, nasci em ${this.nascimento}
Meu Registro Acadêmico:${this.ra} Meu Curso:${this.curso}`);
  }
}
const a1 = new Aluno("Joaquim", " 4795", 2007, " Desenvolvimento de Sistemas");
a1.apresentarSE();

//Crie e utilize uma classe "Sorvete" contendo as propriedades: sabor, preço e tamanho
//Crie um sorvete de morango grande
//Crie um sorvete de chocolate pequeno
// Crie um sorvete de melancia medio
// Altere o preço do sorvete de morango grande para R$ 10,51
class Sorvete {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  getPreco() {
    return this.preco;
  }
  setPreco(novoPreco) {
    this.preco = novoPreco;
  }
  pedido() {
    console.log(
      `O sorvete escolhido foi ${
        this.sabor
      }, no valor de R$${this.getPreco()} no tamanho ${this.tamanho}`
    );
  }
}
const morango = new Sorvete("Morango", 12, "G");

const chocolate = new Sorvete("Chocolate", 10, "P");

const melancia = new Sorvete("Melancia", 8, "P");

morango.pedido();
chocolate.pedido();
melancia.pedido();

morango.setPreco(10.51);
morango.pedido();

console.log(
  "--------------------------------------------------------------------------"
);
console.log(
  "                                 string                                   "
);
console.log(
  "--------------------------------------------------------------------------"
);

function comparar(texto1, texto2) {
  constMinusculas1 = texto1.toLowerCase();
  constMinusculas2 = texto2.toLowerCase();

  return constMinusculas1 === constMinusculas2;
}
const txt1 = "O RATO ROUBOU A RENDA DO REI DE RUANDA";
const txt2 = "o Rato roUbOu a ReNdA dO rEi de ruanda";
const txt3 = "O rato não fez nada naquela noite...";

console.log(txt1);
console.log(txt2);
console.log("É iguaL?")
console.log(comparar(txt1, txt2)); //true or false
console.log(txt3)
console.log("É igual a eles??")
console.log(comparar(txt1, txt3));

console.log("---------------2-----------------");
function extrairNumeros(str) {
  const regex = /\d+/g;
  return str.match(regex);
}
const string = "Ab 1 2 3 1 4 1 9sasp";
const numeros = extrairNumeros(string);
console.log(numeros);

///////////////////////////3///////////////////

function inverterFrase(frase) {
  const palavras = frase.split("");
  return palavras.reverse().join("");
}
const frase = "Este é um exeplo de frase invertida";
const fraseInvertida = inverterFrase(frase);
console.log(fraseInvertida);
