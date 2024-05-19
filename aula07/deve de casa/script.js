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

function historic(mem, op, val, tot, res) {
    if (op === 'mod') {
        historico.value += "mod (" + mem + "," + val + ") = " +
                            "Divisão: " + tot +
                            " Resto: " + res + "\n";
    } else {
        historico.value += mem + " " + op + " " +
            val + " = " + tot + "\n";
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
            historic(memoria, operador, valoratual, total,0);
        } else if (operador === "-") {
            valoratual = Number(visor.value);
            total = memoria - Number(visor.value);
            visor.value = total;
            historic(memoria, operador, valoratual, total,0)
        } else if (operador === "*") {
            valoratual = Number(visor.value);
            total = memoria * valoratual;
            visor.value = (total);
            historic(memoria, operador, valoratual, total,0)
        } else if (operador === "/") {
            valoratual = Number(visor.value);
            total = memoria / valoratual;
            visor.value = (total);
            historic(memoria, operador, valoratual, total,0)
        } else if (operador === 'elevado por') {
            valoratual = Number(visor.value);
            total = Math.pow(memoria, valoratual);
            visor.value = (total);
            historic(memoria, operador, valoratual, total,0)
        } else if (operador === "mod") {
            valoratual = Number(visor.value);
            total = eval(memoria / valoratual);
            let resto = eval(memoria % valoratual);
            historic(memoria, operador, valoratual, total,resto);
        }
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

function exibeadd() {
    let objeto = document.getElementById("complementos");
    if (objeto.style.display === "none") {
        objeto.style.display = 'block';
    } else {
        objeto.style.display = 'none';
    }
}


function raiz() {
    let valor = Number(visor.value);

    let total = Math.sqrt(valor);

    visor.value = total;

    memoria = total;

    historico.value += "√² " + valor + " = " + total + "\n";
}
