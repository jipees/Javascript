
var visor = document.getElementById("visortxt");
visor.value = "";
var operador = "";
var memoria = 0;
var aux = 0;
var historico = document.getElementById("historico");
historico.value = "";

function numero(num) {

    if (visor.value.includes('.') && num === '.') {
        window.alert("ja posuir pontos");
    } else {
        visor.value += num;

    }
}

function calcula() {
    let total, valoratual;

    if (operador === "") {
        window.alert("Você não escolheu um operador!");
    } else {
        if (operador === "+") {
            valoratual = Number(visor.value);
            total = memoria + valoratual;
            visor.value = (total);
        } else if (operador === "-") {
            total = memoria - Number(visor.value);
            visor.value = total;
        } else if (operador === "*") {
            valoratual = Number(visor.value);
            total = memoria * valoratual;
            visor.value = (total);
        } else if (operador === "/") {
            valoratual = Number(visor.value);
            total = memoria / valoratual;
            visor.value = (total);
        }
        historico.value += memoria + " " + operador + " " + 
                           valoratual +" = " + total + "\n";
        memoria = total;
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