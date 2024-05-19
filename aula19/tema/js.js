let pessoa = {
    nome: "josi",
    idade: 25,
    sexo: "masculino"
};

console.log(pessoa.nome);
console.log(pessoa);


let questao = {
    pergunta: "Quem descobriu o Brasil?",
    a: "Cabral",
    b: "Colombo",
    c: "Vasco da Gama",
    d: "Hércules",
    certa: 'a'
}

let questoes = [
    {
        pergunta: "Quem descobriu o Brasil?",
        a: "Cabral",
        b: "Colombo",
        c: "Vasco da Gama",
        d: "Hércules",
        certa: 'a'
    },
    {
        pergunta: "Qual a capita da Bahia?",
        a: "Curitiba",
        b: "Salvador",
        c: "Acapulco",
        d: "Belford Roxo",
        certa: 'b'
    }
]

for (let i = 0; i < questoes.length; i++) {
    console.log((i + 1) + ")" + questoes[i].pergunta);
    console.log("1)" + questoes[i].a);
    console.log("2)" + questoes[i].b);
    console.log("3)" + questoes[i].c);
    console.log("4)" + questoes[i].d);
}

let carros = [
    {
        modelo: "Opala",
        cor: "preto",
        ano: 1970,
        fabricante: "GM"
    },
    {
        modelo: "Maverick",
        cor: "prata",
        ano: 1975,
        fabricante: "Ford"
    }
];

console.log("Fabricante: " + carros[1].fabricante);


function addCarro(array) {
    array.push({
        modelo: window.prompt("informe o modelo"),
        cor: window.prompt("informe a cor"),
        ano: window.prompt("informe o ano"),
        fabricante: window.prompt("informe o fabricante")
    })
}

for (let i = 0; i < 3; i++)
    addCarro(carros);

function imprimeCarros(array) {
    for (let i = 0; i < array.length; i++) {
        console.log("Modelo: " + array[i].modelo);
        console.log("Ano: " + array[i].ano);
        console.log("Fabricante: " + array[i].fabricante);
        console.log("Cor: " + array[i].cor);
    }
}

imprimeCarros(carros);