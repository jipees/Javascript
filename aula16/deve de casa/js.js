var index = 0;


let questoes = [
    document.getElementById("questao1"),
    document.getElementById("questao2"),
    document.getElementById("questao3"),
    document.getElementById("questao4"),
    document.getElementById("questao5")
];

var botao = document.getElementById('botao');

var intervalo;

function resultado() {
    let total = 0;

    if (document.getElementsByName('q1')[0].checked) {
        total++;

    } else {
        for (let i = 0; i < document.getElementsByName('q1').length; i++) {
            if (document.getElementsByName('q1')[i].checked) {
                document.getElementsByName('q1a')[i].style.boxShadow =
                    "0 0 3px red";
            }
        }
    }
    document.getElementsByName('q1a')[0].style.boxShadow = "0 0 3px green";

    if (document.getElementsByName('q2')[2].checked) {
        total++;

    } else {
        for (let i = 0; i < document.getElementsByName('q2').length; i++) {
            if (document.getElementsByName('q2')[i].checked) {
                document.getElementsByName('q2a')[i].style.boxShadow =
                    "0 0 3px red";
            }
        }
    }
    document.getElementsByName('q2a')[2].style.boxShadow = "0 0 3px green";

    if (document.getElementsByName('q3')[0].checked) {
        total++;

    } else {
        for (let i = 0; i < document.getElementsByName('q3').length; i++) {
            if (document.getElementsByName('q3')[i].checked) {
                document.getElementsByName('q3a')[i].style.boxShadow =
                    "0 0 3px red";
            }
        }
    }
    document.getElementsByName('q3a')[0].style.boxShadow = "0 0 3px green";

    if (document.getElementsByName('q4')[3].checked) {
        total++;

    } else {
        for (let i = 0; i < document.getElementsByName('q4').length; i++) {
            if (document.getElementsByName('q4')[i].checked) {
                document.getElementsByName('q4a')[i].style.boxShadow =
                    "0 0 3px red";
            }
        }
    }
    document.getElementsByName('q4a')[3].style.boxShadow = "0 0 3px green";

    if (document.getElementsByName('q5')[2].checked) {
        total++;

    } else {
        for (let i = 0; i < document.getElementsByName('q5').length; i++) {
            if (document.getElementsByName('q5')[i].checked) {
                document.getElementsByName('q5a')[i].style.boxShadow =
                    "0 0 3px red";
            }
        }
    }
    document.getElementsByName('q5a')[2].style.boxShadow = "0 0 3px green";


    window.alert("Você fez: " + total + " acertos.");

    for (let i = 0; i < questoes.length; i++) {
        questoes[i].style.display = 'block';
    }

    clearInterval(intervalo);
}




function sistema() {
    if (index != -1) {
        questoes[index].style.display = "none";
    }

    index++;

    if (index == 5) {
        resultado();
    } else
        questoes[index].style.display = "block";
}

intervalo = setInterval(sistema, 20000);

function proxQuestao() {
    clearInterval(intervalo);
    sistema();
    intervalo = setInterval(sistema, 20000);
}


function antQuestao() {
    questoes[index].style.display = "none";
    index -= 2;
    proxQuestao();
}


let contador1 = setInterval(function contadores() {
    document.getElementById('contador1').innerHTML = 
    Number(document.getElementById('contador1').innerHTML)-1;
}
,1000)