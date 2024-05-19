
function calculo() {

    let valor1 = Number(window.prompt("Digite primeiro numero: "));
    let sin = window.prompt("Digite um operador que deseja calcula: ");
    let valor2 = Number(window.prompt("Digite segundo numero: "));
    if (sin === "+") {
        resultado = Number(valor1 + valor2);
    } else if (sin === "-") {
        resultado = Number(valor1 - valor2);
    } else if (sin === "/") {
        resultado = Number(valor1 / valor2);
    } else if (sin === "*") {
        resultado = Number(valor1 * valor2);
    } else {

        if (sin != "+") {
            sin = window.prompt("Não foi digitado nenhum operado Tente novamente");
        } else if (sin != "- ") {
            sin = window.prompt("Não foi digitado nenhum operado Tente novamente")
        } else if (sin != "*") {
            sin = window.prompt("Não foi digitado nenhum operado Tente novamente")
        } else if (sin != "/") {
            sin = window.prompt("Não foi digitado nenhum operado Tente novamente")
        }
        if (sin === "+") {
            resultado = Number(valor1 + valor2);
        } else if (sin === "-") {
            resultado = Number(valor1 - valor2);
        } else if (sin === "/") {
            resultado = Number(valor1 / valor2);
        } else if (sin === "*") {
            resultado = Number(valor1 * valor2);
        }else{
            console.log("Operadores aceitos: + - / *")
            console.log("Tente novamente")
            return
        }
    }

    console.log("o caculo do mumero " + valor1 + " e " + valor2 + " é : " + resultado);

}
calculo()


function cadastrar(array) {
    array.push(
        [
            window.prompt("Digite o nome"),
            window.prompt("Digite a idade"),
            window.prompt("Digite a altura")
        ]
    )
}

let pessoas = [];
let sair = '0';

do {
    cadastrar(pessoas);
    sair = window.prompt("Para encerrar digite 1 (um)")

} while (sair != "1");


console.log(pessoas);


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
    }
}

imprimePessoas(pessoas);
