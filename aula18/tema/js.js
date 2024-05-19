let questoes =[
    ["Quem descobriu o Brasil?","Cabral", "Colombo","Vasco da Gama","Hércules",'a'],
    ["Qual a Capital do Espírito Santo?", "Natal", "Belém","Vitória","Salvador",'c'],
    ["Qual o estado fisíco da água na nuvem?", "sólido","líquido","gasoso","plasma",'c']
];

let sorteadas = [];

for(let i = 0; i < 2 ; i++){

    let sorteio = Math.floor(Math.random()*questoes.length);

    if(sorteadas.indexOf(sorteio) == -1){
        sorteadas.push(sorteio);
    } else {
        i--;
    }

}

var codQuestoes = "";

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
                   questoes[sorteadas[i]][5] + ">" +
                   "<button onclick='finaliza()'>Finalizar</button>" + 
                   "</div>";
}

document.getElementById("questoes").innerHTML = codQuestoes;

