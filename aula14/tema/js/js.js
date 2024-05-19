function ola(){
    alert("ola povo!");
}

//setInterval(ola,5000);
var temporizador;
function rodar() {
    let contador = 0;
    let mostra = document.getElementById("mostrar");
    temporizador = setInterval(function () {
        mostra.innerHTML += contador + ",";
        console.log("contei: " + contador);
        contador++;
        if (mostra.style.color == 'black')
            mostra.style.color = "red";
        else
            mostra.style.color = 'black';

        if (contador >= 10) {
            clearInterval(temporizador)

        }
    }, 3000);
}

function parar() {
    clearInterval(temporizador);
}

var quadros = [
    "./img/urso1.png",
    "./img/urso2.png",
    "./img/urso3.png"
];

var urso = document.getElementById("urso");
var quadroatual = 0;
var margin = 0;

setTimeout(function () {
    setInterval(function () {
        if (quadroatual != 1) {
            urso.src = quadros[1];
            quadroatual = 1;
            
        } else {
            urso.src = quadros[2];
            quadroatual = 2;
            
        }
        margin += 30;
        urso.style.marginLeft = margin +"px";
    }, 100);
}, 1000);
