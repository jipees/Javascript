let nome, peso, altura;
let nome2, peso2, altura2;

nome = window.prompt("seu nome pimeira pessoa");
nome2 = window.prompt("seu nome da segunda pessoa");
peso = Number(prompt("peso do " +nome));
peso2 = Number(prompt("peso do " +nome2));
altura = Number(prompt("altura do " +nome));
altura2 = Number(prompt("altura do " +nome2));

let balança;
let medida;

if (altura>altura2) {
    medida = "sim "+ nome+ " é mais alto que " +nome2 ; 
}

else {
    medida = "não "+ nome2+ " é mais alto que " +nome;
}


if (peso2<peso) {
    balança = "sim "+ nome2+ " é mais leve que " +nome; 
}

else {
    balança = "não "+ nome+ " é mais leve que " +nome2;
}


console.log("O primeiro cadastrado é mais alto que o segundo? " +medida);
console.log("O segundo cadastrado é mais leve que o primeiro? " +balança);
