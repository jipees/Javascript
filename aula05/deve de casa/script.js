
var visor = document.getElementById("resultado");
var operador = "";
var memoria = 0;

function numero(num) {

    if (visor.value.includes('.') && num === '.') {
        window.alert("ja posuir pontos");
    } else {
        visor.value += num;

    }
}

function calcula() {
    if (operador === "") {
        window.alert("você nao escolheu um operador!");
    } else {
        if (operador === "+") {
            visor.value = (memoria + Number(visor.value));
        } else if (operador === "-") {
            visor.value = (memoria - Number(visor.value));
        } else if (operador === "/") {
            visor.value = (memoria / Number(visor.value));
        } else if(operador === "*") {
            visor.value = (memoria * Number(visor.value));
        }
    }
}


function operadores(op) {
    memoria = Number(visor.value);
    visor.value = "";
    operador = op;
}

function limpar(){
    operador = "";
    visor.value ="";
    memoria = 0;
}