var listapessoas = [];
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

function consu() {
    let cons = document.getElementById('tela');
    cons.style.display = "block";

    let dados = "";

    for (let i = 0; i < listapessoas.length; i++) {
        dados += '<div class="pessoas">';
        dados += "Nome: " + listapessoas[i][0] + " <br />";
        dados += "Idade: " + listapessoas[i][1] + " <br />";
        dados += "Peso(Kg): " + listapessoas[i][2] + " <br />";
        dados += "Altura(cm): " + listapessoas[i][3] + " <br />";
        dados += "</div>";

        document.getElementById('dados').innerHTML = dados;
    }
}
function doador(){
    let consulta = document.getElementById('tela');

    consulta.style.display = "block";

    let dados = "";

    for(let i = 0; i<listapessoas.length; i++){
        if( listapessoas[i][1] >= 18 &&
            listapessoas[i][1] <= 60 &&
            listapessoas[i][2] >= 50 
          ){ 
            dados += '<div class="pessoa">';
            dados += "Nome: " + listapessoas[i][0] + " <br />";
            dados += "Idade: " + listapessoas[i][1] + " <br />";
            dados += "Peso(Kg): " + listapessoas[i][2] + " <br />";
            dados += "Altura(cm): " + listapessoas[i][3] + " <br />";
            dados += "</div>";
        }
    }

    document.getElementById('dados').innerHTML = dados;
}


function imc(){
    let consulta = document.getElementById('tela');

    consulta.style.display = "block";

    let dados = "";

    for(let i = 0; i<listapessoas.length; i++){

        let peso = Number(listapessoas[i][2]);
        let altura = Number(listapessoas[i][3])/100;
        
        let imc = peso / Math.pow(altura,2);

        dados += '<div class="pessoa">';
        dados += "Nome: " + listapessoas[i][0] + " <br />";
        dados += "Idade: " + listapessoas[i][1] + " <br />";
        dados += "IMC: " + imc + "<br />";
        dados += "</div>";
    }

    document.getElementById('dados').innerHTML = dados;
}