/*/let contador = 110;
do {//faça primeiro e pergunte depois
    console.log(contador);
    contador--;
} while (contador < 10);//enquanto(condição)
while (contador >= 0) {//enquanto(condição) --pergunte antes de fazer
    console.log(contador);
    contador--;
}
let resposta;
do {
    resposta = window.prompt("Quem descobriu o Brasil? (só o sobrenome)")
} while (resposta.toLowerCase() != 'cabral');
resposta = window.prompt("Qual a raiz quadrada de 144?");
while (Number(resposta) != 12) {
    window.prompt("Você errou, tente de novo! Qual a raiz de 144?")
}
window.alert("Você acertou.")
//foreach
*/
/*
let contador = 110;
do{//faça primeiro e pergunte depois
console.log(contador);
contador--;
}while(contador<10);//enquanto(condição)
while(contador >= 0){//enquanto(condição) --pergunte antes de fazer
console.log(contador);
contador--;
}
let resposta;
do{
resposta = window.prompt("Quem descobriu o Brasil? (só o sobrenome)")
}while(resposta.toLowerCase() != 'cabral');
resposta= window.prompt("Qual a raiz quadrada de 144?");
while(Number(resposta) != 12){
resposta = window.prompt("Você errou, tente de novo! Qual a raiz de 144?")
}
window.alert("Você acertou.")
*/
//foreach
//digite o nome e a idade de alunos de uma turma, até que o nome seja sair.
//let nome, idade;
//let alunos = [];
/* //não atendeu. cadastrou o sair como se fosse aluno
while (nome!="sair"){
nome = window.prompt("Digite o nome do aluno ou 'SAIR' para encerrar o cadastro");
idade= Number(window.prompt("Digite a idade:"))
alunos.push([nome,idade])
}
*/
/*
nome = window.prompt("Digite o nome do aluno ou 'SAIR' para encerrar o cadastro");
while(nome.toLowerCase() !="sair"){
idade= Number(window.prompt("Digite a idade:"))
alunos.push([nome,idade])
nome = window.prompt("Digite o nome:")
}
while (nome.toLowerCase()!="sair"){
nome = window.prompt("Digite o nome do aluno ou 'SAIR' para encerrar o cadastro");
if(nome!= "sair"){
idade= Number(window.prompt("Digite a idade:"))
alunos.push([nome,idade])
}
}
*/
/*
while (0==0){
nome = window.prompt("Digite o nome do aluno ou 'SAIR' para encerrar o cadastro");
if(nome.toLowerCase() == "sair"){
break; //interrompe o laço. seja FOR ou WHILE
}
idade= Number(window.prompt("Digite a idade:"))
alunos.push([nome,idade])
}
console.log(alunos)

let opcao = 0;

switch (Number(opcao)) {
    case 0:
        console.log("voce escolheu zero");
        break;

    case 1:
        console.log("voce escolheu um");

    case 2:
        console.log("voce escolheu dois");

    default:
        console.log("vc nao escolheu 0 1 2");
        console.log("voce escreveu: " + opcao);
        break;
}
*/

let fucionario=[], cliente=[], fornecedores=[];

var nome = window.prompt("digite o nome")
var telefone = window.prompt("digite o telefone")
var categoria = window.prompt("digite o categoria 1 2 3")

switch (Number(categoria)) {
    case 1:
        console.log("voce é cliente")
        break
    case 2:
        console.log("voce é fucionario")
        break
    case 3:
        console.log("voce é fornecedor")
        break

    default:
        console.log("nao tem categoria")
        break
}



