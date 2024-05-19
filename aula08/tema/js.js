let nome = "joão";

let frutas = ['maça', 'banana', 'uva', "melancia"];

console.log(frutas);

console.log(frutas[2]);

console.log("array de fruta ;");
console.log("casa 1:" + frutas[0]);
console.log('casa 2' + frutas[1]);
console.log('casa 3' + frutas[2]);
console.log('casa 2' + frutas[3]);

frutas.push("melão");
console.log(frutas);
console.log(frutas.length);

frutas[2] = "abacaxi";
console.log(frutas);
console.log("a ultima fruta e :" + frutas[frutas.length - 1]);

console.log(Array.isArray(frutas));

let auxiliar = frutas;

frutas = 'banana'

console.log(Array.isArray(frutas));

frutas = auxiliar;

console.log(frutas.indexOf("melancia"));

frutas.pop();

console.log(frutas);

for (let index = 0; index < 10; index++) {
    console.log(index)
}

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

for (let fruta = 0; fruta < frutas.length; fruta++) {
    console.log("a " + (fruta + 1) + "ª fruta e " + frutas[fruta]);
}

for (let i = 10; i > 0; i--) {
    console.log(i)
}

for (let i = frutas.length - 1; i >= 0; i--) {
    console.log(" a " + (i + 1) + "ª frutra e; " + frutas[i]);
}

let numeros = [];

for (let i = 10; i <= 1101; i++) {
    numeros.push(i);
}


for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

let pessoas = [
    ["joao", "masculino", 22],
    ["ana", "feminino", 30]
];

console.log(pessoas)