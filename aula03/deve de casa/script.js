let nome, peso, altura, idade;

nome = window.prompt("seu nome do voluntario");
peso = Number(prompt("peso do " +nome));
altura = Number(prompt("altura do " +nome));
idade = Number(prompt("idade do " +nome));

let imc =  peso/(altura*altura);
let resultado;
let condicao;
let motivo;
let doador;

if(idade < 18||imc < 18.50)
    condicao = "não doador";
else if(idade <= 60 || imc < 24.99){
    condicao = " doador";
}
else
    condicao = "não doador";


if(idade < 18)
    motivo= "idade menor que o permitido";
else if(idade >60)
    motivo= "idade maior que o permitido";
else if(imc <= 18.50)
    motivo = "imc abaixo do permitido";
else if(imc >= 24.99)
    motivo ="imc acima do permitido";
else if(condicao === "não doador")
   motivo= "nao atende a nenhum requisito";
else
    motivo= "atende todos os requisitos";



console.log("nome: " +nome+
    "\ncodição: " +condicao+
    "\nmotivo: " +motivo);


