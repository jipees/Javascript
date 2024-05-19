

var questoes =[
    ["Quem descobriu o Brasil?","Cabral", "Colombo","Vasco da Gama","Hércules",'a'],
    ["Qual a Capital do Espírito Santo?", "Natal", "Belém","Vitória","Salvador",'c'],
    ["Qual o estado fisíco da água na nuvem?", "sólido","líquido","gasoso","plasma",'c'],
    ["Qual a capital do Rio Grande do Sul?", "Natal", "Rio Grande", "Porto Alegre","Aracaju",'c'],
    ["Qual a capital do Sergipe?", "Natal", "Rio Grande", "Porto Alegre","Aracaju",'d'],
    ["Qual a capital do Rio Grande do Norte?", "Natal", "Rio Grande", "Porto Alegre","Aracaju",'a'],
    ["Qual o elemento mais abundante do Universo?", "C", "H", "Z","Ar",'b']
];

var exibeQuestoes = [];

var index = 0;

var sorteadas = [];



function proxQuestao() {
    if (index != -1) {
        exibeQuestoes[index].style.display = "none";
    }

    index++;

    if (index == (sorteadas.length)) {
        finaliza();
    } else
        exibeQuestoes[index].style.display = "block";

}

function finaliza(){
    let pontos = 0;
    let selecionada = "";
    let respostas;


    for (let i = 0; i < sorteadas.length; i++) {

        exibeQuestoes[i].style.display = "none";

        for (let j = 0; j < 4; j++) {

            if (document.getElementsByName("q" + (i + 1))[j].checked) {

                if (document.getElementsByName("q" + (i + 1))[j].value == questoes[sorteadas[i]][5]) {
                    selecionada +="<span>"+questoes[sorteadas[i]][0]+"</span>"+"<br/>"+
                    "Alternativa Selecionada: <span style ='color:green; font-weight:bolder; font-size:17pt;'>" + 
                    document.getElementsByName("q" + (i + 1))[j].value + 
                    "</span>" +"<br/>"; 

                    pontos++;

                } else {

                    selecionada +="<span>"+questoes[sorteadas[i]][0]+"</span>"+"<br/>"+
                    "Alternativa Selecionada: <span style ='color:red; font-weight:bolder; font-size:17pt;'>" +
                    document.getElementsByName("q" + (i + 1))[j].value + 
                    "</span>" +"<br/>"; 

                }

                selecionada += "Alternativa Correta: <span style ='color:green; font-weight:bolder; font-size:17pt;'>" + 
                questoes[sorteadas[i]][5] + "</span>" + "<br/><br/>";
            }
        }
    }

    respostas = "<h1> Resultado geral: " + pontos + " pontos.</h1>";
    respostas += selecionada;

    document.getElementById("respostas").innerHTML = respostas;
    document.getElementById("resultado").style.display = "block";

}



function escreveQuestoes(){

    let codQuestoes = "";

    for(let i = 0 ; i < sorteadas.length ; i++){ 
        if(i==0){
            codQuestoes += "<div id='questao" + (i+1) + "'> ";
        } else{
            codQuestoes += '<div id="questao' + (i+1) + '" style="display:none"> ';
        }
    
        codQuestoes += "<p>" + (i+1) + ") " + questoes[sorteadas[i]][0] + "</p>" +
                       "<input type='radio' value = 'a' name='q" + (i+1) +"'>"+
                       questoes[sorteadas[i]][1] + "<br />" +
                       "<input type='radio' value = 'b' name='q" + (i+1) +"'>"+
                       questoes[sorteadas[i]][2] + "<br />" +
                       "<input type='radio' value = 'c' name='q" + (i+1) +"'>"+
                       questoes[sorteadas[i]][3] + "<br />" +
                       "<input type='radio' value = 'd' name='q" + (i+1) +"'>"+
                       questoes[sorteadas[i]][4] + "<br />" +
                       "<input type='hidden' id='certa" + (i+1)+ "' value =" +  
                       questoes[sorteadas[i]][5] + "> <hr />";
        
        if(i == (sorteadas.length-1)){
            codQuestoes += "<button onclick='finaliza()'>Finalizar</button>" + 
                           "</div>";
        } else {
            codQuestoes += "<button onclick='proxQuestao()'>Próxima Questão</button>" + 
                           "</div>";
        }
    
                       
    }
    
    document.getElementById("questoes").innerHTML = codQuestoes;

    for(let i = 0; i < sorteadas.length ; i++){
        exibeQuestoes.push(document.getElementById("questao" + (i+1)));
    }
    
}


function sorteio(){ 
    sorteadas = [];
    
    for(let i = 0; i < 4 ; i++){

        let sorteio = Math.floor(Math.random()*questoes.length);

        if(sorteadas.indexOf(sorteio) == -1){
            sorteadas.push(sorteio);
        } else {
            i--;
        }

    }
    document.getElementById("resultado").style.display = "none";
    escreveQuestoes();
}

