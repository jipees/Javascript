let listapessoa = [];
let listaanimal = [];
let listacarro = [];



function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;

    

    console.log("nome : " + nome +
    "\n idade : " + idade +
    "\n sexo : " + sexo);

}


function Animal(nome, especie, som) {
    this.nome = nome;
    this.especie = especie;
    this.som = som;

    console.log("nome : " + nome +
    "\n espécie : " + especie +
    "\n som : " + som);


}


function Carro(modelo, fabricante, cor, ano) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.cor = cor;
    this.ano = ano;

    console.log("modelo : " + modelo +
    "\n fabricante : " + fabricante +
    "\n cor : " + cor +
    "\n ano : " + ano);

}


console.log("-------------------Pessoa--------------------------- ")
listapessoa.push(new Pessoa("julia", 22, "mulher"));

console.log("--------------------------------------------------- ")

listapessoa.push(new Pessoa("jonas", 25, "homem"));

console.log("--------------------------------------------------- ")

listapessoa.push(new Pessoa("cledinaudor", 23, "homem"));

console.log("------------------Animal------------------- ")

listaanimal.push(new Animal("jorge", "gato", "mia"));

console.log("--------------------------------------------------- ")

listaanimal.push(new Animal("pedro", "cachoro", "late"));

console.log("--------------------------------------------------- ")

listaanimal.push(new Animal("vitor", "cavalo", "relinxa"));

console.log("-------------------Carro--------------------------- ")

listacarro.push(new Carro("palio", "fiat", "vemerlho", 2011));

console.log("--------------------------------------------------- ")

listacarro.push(new Carro("fusil", "ford", "roxo", 2018));

console.log("--------------------------------------------------- ")

listacarro.push(new Carro("corsa", "Chevrolet", "amarelo", 2020));

console.log("--------------------------------------------------- ")

    