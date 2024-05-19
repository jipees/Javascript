/*function soma(){
    let valor1 = Number(window.prompt("Digite um valor"))
    let valor1 = Number(window.prompt("Digite um valor"))

    return valor1 + valor2
}

total = soma();

console.log(total)

console.log(soma());
 let totais = [];
 totais.push(soma());

 console.log(totais)

 function subtracao(){
    let valor1 = Number(window.prompt("Digite um valor"))
    let valor1 = Number(window.prompt("Digite um valor"))
    return valor1 - valor2
 }

 console.log(subtracao());
*/

var total = []
function soma(){
    let valor1 = Number(window.prompt("Digite um valor"))
    let valor2 = Number(window.prompt("Digite um valor"))
  return valor1 + valor2
   
}

   
function retonar(){
    total.push(soma())
}
retonar()
console.log(retonar())
