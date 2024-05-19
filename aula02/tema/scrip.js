let valo1 = 0, valor2 = 0;
let v1 = "0", v2 = "0";
let nome= "juca", sobrenome = "bala";

console.log(nome+ " "+sobrenome);

let texto= "valor1 = " + valo1;
console.log(texto)

/*
string =texto
Float = numero com casa decimal
double = numero com o dobro dr casa decimais **não tem no js**
integer = numeros inteiro
boolean (booleano) = true e false
number = numero generico (integer ou float);
*/

valo1 = Number(prompt("digite valo 1"));

valor2 = Number(prompt("valo 2"));

console.log(valo1+valor2);

v1 = "15";
v2 = "20";
 
valo1 = parseInt(v1);
valor2 = parseInt(v2);

console.log(valo1 + valor2);

let compara =1 == "1";


console.log(compara)

compara = 1 === "1";
 console.log(compara);

 compara = 1 === 1.0;
 console.log(compara);

 console.log(!compara);

 console.log(!(1==1));
 
 console.log(1!=1);

 let docontra = !compara;

 console.log(docontra)


 let valorx, valoy;

 valorx = Number(prompt("valox"));

valoy = Number(prompt("valoy"));

let maior = valoy>valorx;

console.log(maior)