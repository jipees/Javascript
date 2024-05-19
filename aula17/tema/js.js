/*console.log(Math.random());

console.log(Math.random() * 10);//de 0 à 9

console.log(Math.floor(Math.random() * 11));//de 0 à 10

console.log(Math.floor(Math.random() * 101));

// 75 alunos em uma sala
console.log(Math.floor(Math.random() * 76));
*/
let sorteados = [];

function sorteio(maximo){
    let numero = Math.floor(Math.random() * maximo+1);

    if(sorteados.indexOf(numero) == -1){//se não encontrar o numero
        console.log("Número Sorteado: " + numero);
        sorteados.push(numero);
    }
}

/*
for(let i = 0; i <= 20; i++){
    sorteio();
}*/

qtSorteios = 0;
while(sorteados.length < 6){
    sorteio(100);
    qtSorteios ++;
}
console.log("Quantidade de sorteios realizados: " + qtSorteios);

/*
let array = ["banana", 'maçã', 'uva', 'pera', 'manga'];

console.log(array.indexOf('uva'));//2
console.log(array.indexOf('manga'));//4
console.log(array.indexOf('melancia'));//-1 pq não encontrou
*/

console.log("Sorteio entre 20 e 30")
console.log(Math.floor(Math.random()*11)+20)

//1ª 75321 a ultima 75445 : 3 alunos
for(let i = 0; i< 3; i++)                         // \/compensando a inclusão do incial
    console.log(Math.floor(Math.random()*(75445-75321+1))+75321);
                        //          ultimo ^^^   ^^^ primeiro

for(let i = 0; i<6 ; i++)
    console.log(Math.floor(Math.random()*(60-1+1))+1)
    ///                          ultimo  ^  ^ primeiro