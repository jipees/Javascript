
var quadros = [
    "./IMG/urso/urso1.png",
    "./IMG/urso/urso2.png",
    "./IMG/urso/urso3.png"
];

var urso = document.getElementById('animacao');

var quadroatual = 0;

var margem = 0;

var larguraTela = window.innerWidth;

var direcao = 0;

setTimeout(function () {
    let anima = setInterval(function () {
        if (quadroatual != 1) {
            urso.src = quadros[1];
            quadroatual = 1;
        } else {
            urso.src = quadros[2];
            quadroatual = 2;
        }

        if (direcao == 0)
            margem += 40;
        else
            margem -= 40;

        urso.style.marginLeft = margem + "px";

        if (margem >= larguraTela - 200) direcao = 1;

        if (margem <= 0){
             direcao = 0;
             clearInterval(anima);
             urso.src = quadros[0];
        }


    }, 110);
}, 3000);


var ursoDesafio = document.getElementById("ursoEscada");
var anima2;
var quadrosDesafio;

setTimeout(function () {
    quadrosDesafio = [
        "./IMG/urso/urso1.png",
        "./IMG/urso/urso2.png",
        "./IMG/urso/urso3.png"
    ]

    let quadroatual = 0;

    let direcao = 0;

    let margemEsquerda = 55;
    let margemTopo = 385;

    anima2 = setInterval(function () {



        if (quadroatual != 1) {
            ursoDesafio.src = quadrosDesafio[1];
            quadroatual = 1;
        } else {
            ursoDesafio.src = quadrosDesafio[2];
            quadroatual = 2;
        }

        if (direcao == 0) {
            margemEsquerda += 48;
            margemTopo -= 46;
        }
        else{
            margemTopo += 46;
            margemEsquerda -= 48;
        }
            

        ursoDesafio.style.marginLeft = margemEsquerda + "px";
        ursoDesafio.style.marginTop = margemTopo + "px";

        if (margemEsquerda >= 300) direcao = 1;
        

        if (margemEsquerda <= 55) direcao = 0;
        
    }, 200);
}, 3000);


