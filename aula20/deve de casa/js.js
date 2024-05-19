//Variáveis Globais

var listafuncionario = [];
var listacliente = [];
var listaproduto = [];



//FUNCTIONS




function exibeElemento(elemento){

    for(let i = 0 ; i < document.getElementsByClassName("esconde").length ; i++){

        document.getElementsByClassName("esconde")[i].style.display = "none";

    }



    document.getElementById(elemento).style.display = "block";

}



function cadastrarFuncionario(){

    

    listafuncionario.push({

        nome: document.getElementById("inputNome").value,

        nascimento: document.getElementById("inputNascimento").value,

        telefone: document.getElementById("inputTelefone").value,

        mail: document.getElementById("inputEmail").value

    })



    console.log(document.getElementById("inputNome").value + " Cadastrado com Sucesso!")

    document.formFunc.reset();

}

function cadastrarCliente(){

    

    listacliente.push({

        nome: document.getElementById("inputNomec").value,


        telefone: document.getElementById("inputTelefonec").value,
    })



    console.log(document.getElementById("inputNomec").value + " Cadastrado com Sucesso!")

    document.formcli.reset();

}

function cadastrarProduto(){

    

    listaproduto.push({

        nome: document.getElementById("inputNomep").value,

        preco: document.getElementById("inputpreco").value,

        fabricante: document.getElementById("inputfabri").value,

    })



    console.log(document.getElementById("inputNomep").value + " Cadastrado com Sucesso!")

    document.formpro.reset();

}

function exibeFuncionarios(){

    let html = "";



    if(listafuncionario.length == 0){

        html += "<h4>Não há funcionario cadastrados</h4>"

    } else {

        for(let i = 0 ; i < listafuncionario.length ; i++){

            html += "<div class='resultado'>"+

                    "Nome: " + listafuncionario[i].nome + "<br />" +

                    "Data de nascimento: " + listafuncionario[i].nascimento + "<br />" +

                    "Telefone: " + listafuncionario[i].telefone + "<br />" +

                    "E-mail: " + listafuncionario[i].email + "<br />" +

                    "</div>"

        }

    }



    document.getElementById("resultadosf").innerHTML = html;

}


function exibecliente(){

    let html = "";



    if(listacliente.length == 0){

        html += "<h4>Não há cliente cadastrados</h4>"

    } else {

        for(let i = 0 ; i < listacliente.length ; i++){

            html += "<div class='resultado'>"+

                    "Nome: " + listacliente[i].nome + "<br />" +

        

                    "Telefone: " + listacliente[i].telefone + "<br />" +

                   

                    "</div>"

        }

    }



    document.getElementById("resultadosc").innerHTML = html;

}


function exibeproduto(){

    let html = "";



    if(listaproduto.length == 0){

        html += "<h4>Não há produto cadastrados</h4>"

    } else {

        for(let i = 0 ; i < listaproduto.length ; i++){

            html += "<div class='resultado'>"+

                    "Nome: " + listaproduto[i].nome + "<br />" +

                    " preço: " + listaproduto[i].preco + "<br />" +

                    "Fabricante: " + listaproduto[i].fabricante + "<br />" +

                    

                    "</div>"

        }

    }



    document.getElementById("resultadosp").innerHTML = html;

}