var divSorteio =  document.getElementById("sorteio"),
    spanNumeros = document.getElementById("numeros");

function sorteio(){
    let valor1  = Number(document.getElementById("valor1").value),
        valor2  = Number(document.getElementById("valor2").value),
        qtd     = Number(document.getElementById("qtd").value),
        repete  = document.getElementById("repete");
    
        spanNumeros.innerHTML = "";
        
        divSorteio.style.display ="block";
    
    if(valor1 > valor2){
        let aux = valor1;
        valor1 = valor2;
        valor2 = aux;
    }

    let sorteados = [];

    for(let i = 1 ; i <= qtd ; i++){

        let sorteado = Math.floor(Math.random()*(valor2-valor1+1)+valor1);

        if(!repete.checked){
            if(sorteados.indexOf(sorteado) == -1){        
                sorteados.push(sorteado);
            } else{
                i--;
                continue;
            }
        }

        spanNumeros.innerHTML += i + "º número:" + sorteado + "<br />";

    }
}