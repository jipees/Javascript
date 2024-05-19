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

function resultado(){
    let total = 0;

    if(document.getElementsByName('q1')[0].checked) total++;
    if(document.getElementsByName('q2')[2].checked) total++;
    if(document.getElementsByName('q3')[0].checked) total++;
    if(document.getElementsByName('q4')[3].checked) total++;
    if(document.getElementsByName('q5')[2].checked) total++;

    window.alert("Você fez: " + total + " acertos.");

    for(let i = 0; i < questoes.length ; i++){
        questoes[i].style.display = 'block';
    }

    clearInterval(intervalo);
}



function sistema(){
    questoes[index].style.display = "none"; 
    
    index++;
    
    if(index==5){
        resultado();
    }else
        questoes[index].style.display = "block";
}

intervalo = setInterval(sistema, 20000);
function proxQuestao(){
    clearInterval(intervalo);
    sistema();
    intervalo=setInterval(sistema, 20000); 
}

