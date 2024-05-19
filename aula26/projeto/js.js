//classes

class livaria {
    nome;
    tel;
    email;
    cpf;

    constructor(nome, tel, email, cpf) {
        this.nome = nome;
        this.tel = tel;
        this.email = email;
        this.cpf = cpf;
    }
}


class cliente extends livaria {

    constructor(nome, tel, email, cpf) {
        super(nome, tel, email, cpf);
    }

    imprime() {
        let impressao = "Nome do cliente: " + this.nome + "<br/>" +
            "Telefone: " + this.tel + "<br/>" +
            "Email: " + this.email + "<br/>" +
            "Cpf: " + this.cpf + "<br/>";

        return impressao;
    }
}

class fucionario extends livaria {
    endereco;
    filiado;

    constructor(nome, tel, email, cpf, endereco, filiado) {
        super(nome, tel, email, cpf);
        this.endereco = endereco;
        this.filiado = filiado;
    }

    imprime() {
        let impressao = "Nome do cliente: " + this.nome + "<br/>" +
            "Telefone: " + this.tel + "<br/>" +
            "Email: " + this.email + "<br/>" +
            "Cpf: " + this.cpf + "<br/>" +
            "Endereço: " + this.endereco + "<br/>" +
            "Filiado: " + this.filiado + "<br/>";

        return impressao;
    }
}

class livro {

    titulo;
    auto;
    genero;
    preco;

    constructor(titulo, auto, genero, preco) {
        this.titulo = titulo;
        this.auto = auto;
        this.genero = genero;
        this.preco = preco;
    }

    imprime() {
        let impressao = "Nome do Livro: " + this.titulo + "<br/>" +
            "Auto: " + this.auto + "<br/>" +
            "Genero: " + this.genero + "<br/>" +
            "Preço: R$" + this.preco + "<br/>";

        return impressao;
    }
}

class Pedido {
    cliente;
    vendedo;
    livro;
    constructor(cliente, vendedo, livro) {
        this.cliente = cliente;
        this.vendedo = vendedo;
        this.livro = livro;
    }
}
//fim


//variaves

var listacliente = [], listafucionario = [], listalivro = [], listaPedido = [];

//exibitela
function exibeTela(tela) {
    let telas = document.getElementsByClassName("esconde");

    for (let i = 0; i < telas.length; i++) {
        telas[i].style.display = "none";
    }

    telas[tela].style.display = "block";
}
//fim


//function

function cadastraCliente() {
    listacliente.push(new cliente(
        document.getElementById("inputNomeCli").value,
        document.getElementById("inputTelCli").value,
        document.getElementById("inputemailCli").value,
        Number(document.getElementById("inputcpf").value)
    ));

    document.formCliente.reset();
    console.log(listacliente);
}

function cadastrafucionario() {
    listafucionario.push(new fucionario(
        document.getElementById("inputNomefucionario").value,
        document.getElementById("inputTelfucionari").value,
        document.getElementById("inputemailfucionario").value,
        Number(document.getElementById("inputCPFfucionario").value),
        document.getElementById("inputenderecofucionario").value,
        document.getElementById("inputfiliacao").value
    ));

    document.formfucionario.reset();
    console.log(listafucionario);
}

function cadastralivro() {
    listalivro.push(new livro(
        document.getElementById("inputtitulivro").value,
        document.getElementById("inputautor").value,
        document.getElementById("inputgenero").value,
        Number(document.getElementById("inputpreco").value)
    ));

    document.formlivro.reset();
    console.log(listalivro);
}


function validalivro() {
    if (document.getElementById("inputcompratit").value != "") {
        let achou = false;
        let ondeAchou = 0;
        let livro;
        for (let i = 0; i < listalivro.length; i++) {
            if (listalivro[i].titulo.toLowerCase().startsWith(document.getElementById("inputcompratit").value.toLowerCase())) {
                achou = true;
                ondeAchou = i;
            }
        }
        if (achou) {
            livro = "<div class='container valida'>" +
                listalivro[ondeAchou].imprime() +
                "</div>";
        } else {
            livro = "<h4 class='erroValida'>Livro nao encontrado</h4>";
        }

        document.getElementById("validalivro").innerHTML = livro;
    }
}

function validafucionario() {
    if (document.getElementById("inputvedfucinario").value != "") {
        let achou = false;
        let ondeAchou = 0;
        let vendedo;
        for (let i = 0; i < listafucionario.length; i++) {
            if (listafucionario[i].nome.toLowerCase().startsWith(document.getElementById("inputvedfucinario").value.toLowerCase())) {
                achou = true;
                ondeAchou = i;
            }
        }
        if (achou) {
            vendedo = "<div class='container valida'>" +
                listafucionario[ondeAchou].imprime() +
                "</div>";
        } else {
            vendedo = "<h4 class='erroValida'>Fucionário nao encontrado</h4>";
        }

        document.getElementById("validafucionario").innerHTML = vendedo;
    }
}

function validaCliente() {
    if (document.getElementById("inputcomprado").value != "") {
        let achou = false;
        let ondeAchou = 0;
        let comprado;
        for (let i = 0; i < listacliente.length; i++) {
            if (listacliente[i].nome.toLowerCase().startsWith(document.getElementById("inputcomprado").value.toLowerCase())) {
                achou = true;
                ondeAchou = i;
            }
        }
        if (achou) {
            comprado = "<div class='container valida'>" +
                listacliente[ondeAchou].imprime() +
                "</div>";
        } else {
            comprado = "<h4 class='erroValida'>Cliente nao encontrado</h4>";
        }

        document.getElementById("validaCliente").innerHTML = comprado;
    }
}

function cadastraPedido() {
    let cliente = document.getElementById("validaCliente");
    let vendedo = document.getElementById("validafucionario");
    let livro = document.getElementById("validalivro");
    if (
        cliente.innerHTML != "" &&
        vendedo.innerHTML != "" &&
        livro.innerHTML != ""
    ) {
        listaPedido.push(new Pedido(cliente.innerHTML,
            vendedo.innerHTML,
            livro.innerHTML));
    } else {
        window.alert("OS CAMPOS ESTÃO VAZIOS");
    }
    document.formvenda.reset();
}

function relatoriofunci() {

    let consulta = document.getElementById('tela');

    consulta.style.display = "block";
    let dados = "";

    for (let i = 0; i < listafucionario.length; i++) {

        dados += '<div class="fun"> <h3>Fucionário</h3>';
        dados += "<hr>Nome: " + listafucionario[i].nome + " <br />";
        dados += "telefone: " + listafucionario[i].tel + " <br />";
        dados += "Email: " + listafucionario[i].email + " <br />";
        dados += "Cpf: " + listafucionario[i].cpf + " <br />";
        dados += "Endereco: " + listafucionario[i].endereco + " <br />";
        dados += "filiado: " + listafucionario[i].filiado + " <br />";
        dados += "<hr></div>";
    }

    document.getElementById('dados').innerHTML = dados;


}

function relatoriocliente() {


    let consulta = document.getElementById('tela');

    consulta.style.display = "block";
    let dados = "";

    for (let i = 0; i < listacliente.length; i++) {

        dados += '<div class="cli"> <h3>Cliente</h3>';
        dados += "<hr>Nome: " + listacliente[i].nome + " <br />";
        dados += "telefone: " + listacliente[i].tel + " <br />";
        dados += "Email: " + listacliente[i].email + " <br />";
        dados += "Cpf: " + listacliente[i].cpf + " <br />";
        dados += "<hr></div>";
    }

    document.getElementById('dados').innerHTML = dados;

}

function relatorioliv() {


    let consulta = document.getElementById('tela');

    consulta.style.display = "block";
    let dados = "";

    for (let i = 0; i < listalivro.length; i++) {

        dados += '<div class="liv"> <h3>livr os</h3>';
        dados += "<hr>Titulo: " + listalivro[i].titulo + " <br />";
        dados += "autor: " + listalivro[i].autor + " <br />";
        dados += "genero: " + listalivro[i].genero + " <br />";
        dados += "preço: " + listalivro[i].preço + " <br />";
        dados += "<hr></div>";
    }

    document.getElementById('dados').innerHTML = dados;

}
