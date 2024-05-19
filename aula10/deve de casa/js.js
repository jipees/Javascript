let contador = 0;
for (let i = 7; i <= 777; i++) {
    if (i % 2 != 0) contador++;
}

console.log("Existem " + contador + "numeros impares entre 7 e 777");

let frutas = ["banana", 'maça', "uva", "melão", "abacaxi", "melacia"];

let fruta = window.prompt("adivinhe uma das frutas da minha lista");
let tem = false;

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].toLowerCase().search(fruta.toLowerCase()) >= 0) {
        tem = true;
    }
}

if (tem)
    console.log("na minha lista tem " + fruta);
else
    console.log("na minha lista não tem " + fruta);

console.log(frutas.sort())
let auxiliar = frutas.sort()
for (let i = 0; i < auxiliar.length; i++)
    console.log(auxiliar[i])