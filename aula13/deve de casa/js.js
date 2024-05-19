function cadastrar(array) {
    array.push(
        [
            window.prompt("Digite o nome"),
            window.prompt("Digite a idade"),
            window.prompt("Digite a altura")
        ]
    )
}

var pessoas = [];
var menu = "";

function imprimePessoas(array) {
    console.log("Pessoas cadastradas");

    if (array.length == 0) {
        console.log("\n\nLista vazia\n\n");
    } else {
        for (let i = 0; i < array.length; i++) {
            console.log("Nome: " + array[i][0]);
            console.log("Idade: " + array[i][1]);
            console.log("Altura: " + array[i][2]);
            console.log("====================================");
        }
        return
    }
}
do {
    cadastrar(pessoas)
    menu = window.prompt("Deseja cadastras consulta ou sair")
}while (menu.toLowerCase() != "sair"){
    if(menu.toLowerCase() === "sair"){
        console.log("Programa encerrado");
    }else if(menu === "cadastras"){
        cadastrar(pessoas)
    }else if(menu.toLowerCase() === "consulta"){
        imprimePessoas(pessoas);
        console.log(pessoas);
    } else{
        console.log("tenta novamente")
    }
}


