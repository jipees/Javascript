let valo1, valo2;

valo1 = parseInt(window.prompt("digite o primeiro numero"));
valo2 = parseInt(window.prompt("digite o segundo numero"));

if(valo1 % 2 == 0){
    var resultado1 = " par";
}
else{
    var resultado1 = " impar"; 
}

if(valo2 % 2 == 0){
    var resultado2 = " par";
}
else{
    var resultado2 = " impar"; 
}

let quadrado = Math.pow(valo1,2);

let cubo = Math.pow(valo2,3);

let raiz1 = Math.sqrt(valo1)

let raiz2 = Math.sqrt(valo2)


console.log(valo1 + ": " + resultado1+
        "\n" + valo2 +': ' + resultado2+
        "\nquadrdo do primeiro numero : " + quadrado+
        "\ncubo do segundo numero : " + cubo+
        "\nRaiz do primeiro  : " + raiz1+
        "\nRaiz do segundo  : " + raiz2);
