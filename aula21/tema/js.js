function Pessoa(){
    this.nome;
    this.idade;
    this.sexo;

}

let aluno = new Pessoa();

aluno.idade= 10;


console.log(aluno.idade);

function Animal(){
    this.nome= "enzo";
    this.grupo;
    this.son;

}

let gato = new Animal();


console.log(gato.nome);

let cao = new Animal();
console.log(cao.nome);

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

let biscoito = new Produto('trakinas',2.50);


console.log(biscoito.nome+" "+biscoito.preco.toFixed(2));

function Quadrado(lado){
    this.area = lado*lado;
}


let q1 = new Quadrado(4);

console.log(q1.area);