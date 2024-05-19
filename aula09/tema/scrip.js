/* VARIÁVEIS GLOBAIS*/
var listapessoas = []; //declarando um array vazio
/*FUNÇÕES*/
function cadastrar() {
    let pessoa = [
        document.getElementById('nometxt').value,
        document.getElementById('idadetxt').value,
        document.getElementById('alturatxt').value,
        document.getElementById('pesotxt').value
    ];
    listapessoas.push(pessoa);
    console.log(pessoa);
    console.log(listapessoas);
    document.cadastro.reset();
}

function consultar() {
    let consulta = document.getElementById("consulta");
    consulta.style.display = "block";

    let dados = "";
    for (let i = 0; i < listapessoas.length; i++) {
        if (listapessoas[i][1] >= 18) {
            dados += "<div class='pessoa'>"
            dados += "nome " + listapessoas[i][0] + '<br>';
            dados += "idade " + listapessoas[i][1] + "<br>";
            dados += "peso " + listapessoas[i][2] + "<br>";
            dados += "altura " + listapessoas[i][3] + "<br>";
            dados += "</div>";
        }

    }
    document.getElementById('dados').innerHTML = dados;

}
let listamenoridade = [];
let listamaioridade = []; 

function cadastroporidade() {
    let pessoa = [
        document.getElementById('nometxt').value,
        document.getElementById('idadetxt').value,
        document.getElementById('alturatxt').value,
        document.getElementById('pesotxt').value
    ];

    console.log(pessoa);
    if (document.getElementById('idadetxt').value < 18){
        listamenoridade.push(pessoa)
        console.log(listamenoridade);
    } else {
        listamaioridade.push(pessoa);
        console.log(listamaioridade);
    }
    document.cadastro.reset();

}

function consultaporidade(){
    let pessoa = [
        document.getElementById('nometxt').value,
        document.getElementById('idadetxt').value,
        document.getElementById('alturatxt').value,
        document.getElementById('pesotxt').value
    ];

    if (document.getElementById('idadetxt').value < 18){
        listamenoridade.push(pessoa)
        console.log(listamenoridade);
    } else {
        listamaioridade.push(pessoa);
        console.log(listamaioridade);
    }
    document.cadastro.reset();

    console.log("maior idade" + listamaioridade+
    "\n meno idade" + listamenoridade);
}
