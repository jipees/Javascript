class Comida{
    ingrediente;
    preco;

    constructor(ingrediente,preco){
        this.ingrediente = ingrediente;
        this.preco = preco;
    }
}

class Pessoa{
    nome;
    telefone;
}

class Lanche extends Comida{
    nome;

    constructor(nome,ingrediente,preco){
        super(ingrediente,preco);
        this.nome = nome;
    }

    imprime(){
        let impressao = "Nome do Lanche: " + this.nome + "<br/>" +
                        "Ingredientes: " + this.ingrediente + "<br/>" +
                        "Preço: R$" + this.preco.toFixed(2) + "<br/>" ;
        
        return impressao;
    }
}

class Suco extends Comida{
    constructor(ingrediente,preco){
        super(ingrediente,preco);
    }

    imprime(){
        let impressao = "Ingredientes: " + this.ingrediente + "<br/>" +
                        "Preço: R$" + this.preco.toFixed(2) + "<br/>" ;

        return impressao;
    }
}

class Entregador extends Pessoa{
    constructor(n,t){
        super();
        super.nome = n;
        super.telefone = t;
    }

    imprime(){
        let impressao = "Nome do Entregador: " + this.nome + "<br/>" +
                        "Telefone: " + this.telefone + "<br/>";
        
        return impressao;
    }

}

class Cliente extends Pessoa{
    endereco;

    constructor(nome,telefone,endereco){
        super();
        super.nome = nome;
        super.telefone = telefone;
        this.endereco = endereco;
    }

    imprime(){
        let impressao = "Nome do Cliente: " + this.nome + "<br/>" +
                        "Telefone: " + this.telefone + "<br/>" +
                        "Endereço: " + this.endereco + "<br/>";
        
        return impressao;
    }
}

class Pedido{
    cliente;
    entregador;
    suco;
    lanche;

    constructor(cliente,entregador,suco,lanche){
        this.cliente=cliente;
        this.entregador = entregador;
        this.suco = suco;
        this.lanche = lanche;
    }
}



var listaCliente = [], listaLanche = [], listaSuco = [], listaEntregador = [],
    listapedido = [];



function exibeTela(tela){
    let telas = document.getElementsByClassName("esconde");

    for(let i = 0; i < telas.length ; i++){
        telas[i].style.display = "none";
    }

    telas[tela].style.display = "block";
}

function cadastraCliente(){
    listaCliente.push(new Cliente(
        document.getElementById("inputNomeCli").value,
        document.getElementById("inputTelCli").value,
        document.getElementById("inputEnderecoCli").value
    ));

    document.formCliente.reset();
    console.log(listaCliente);
}

function cadastraLanche(){
    listaLanche.push(new Lanche(
        document.getElementById("inputNomeLanc").value,
        document.getElementById("inputIngredienteLanc").value,
        Number(document.getElementById("inputPrecoLanc").value)
    ));

    document.formLanche.reset();
}

function cadastraSuco(){
    listaSuco.push(new Suco(
        document.getElementById("inputIngredienteSuco").value,
        Number(document.getElementById("inputPrecoSuco").value)
    ));

    document.formSuco.reset();
}

function cadastraEntregador(){
    listaEntregador.push(new Cliente(
        document.getElementById("inputNomeEntregador").value,
        document.getElementById("inputTelEntregador").value
    ));

    document.formEntregador.reset();
}

function validaCliente(){
    if(document.getElementById("inputIdCli").value!= "" ){
        let achou = false;
        let ondeAchou = 0;
        let cliente;
        for(let i = 0 ; i < listaCliente.length ; i++){
            if(listaCliente[i].nome.toLowerCase().startsWith(document.getElementById("inputIdCli").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            cliente =  "<div class='container valida'>"+
                            listaCliente[ondeAchou].imprime() +
                            "</div>";
        } else {
            cliente = "<h3 class='erroValida'>Cliente nao encontrado</h3>";
        }

        document.getElementById("validaCliente").innerHTML = cliente;
    }
}

function validaLanche(){
    if(document.getElementById("inputIdLanche").value!= "" ){
        let achou = false;
        let ondeAchou = 0;
        let lanche;
        for(let i = 0 ; i < listaLanche.length ; i++){
            if(listaLanche[i].nome.toLowerCase().startsWith(document.getElementById("inputIdLanche").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            lanche =  "<div class='container valida'>"+
                            listaLanche[ondeAchou].imprime() +
                            "</div>";
        } else {
            lanche = "<h3 class='erroValida'>Lanche nao encontrado</h3>";
        }

        document.getElementById("validaLanche").innerHTML = lanche;
    }
}

function validaSuco(){
    if(document.getElementById("inputIdSuco").value!= "" ){
        let achou = false;
        let ondeAchou = 0;
        let suco;
        for(let i = 0 ; i < listaSuco.length ; i++){
            if(listaSuco[i].ingrediente.toLowerCase().startsWith(document.getElementById("inputIdSuco").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            suco =  "<div class='container valida'>"+
                            listaSuco[ondeAchou].imprime() +
                            "</div>";
        } else {
            suco = "<h3 class='erroValida'>Suco nao encontrado</h3>";
        }

        document.getElementById("validaSuco").innerHTML = suco;
    }
}

function validaEntregador(){
    if(document.getElementById("inputIdEntregador").value!= "" ){
        let achou = false;
        let ondeAchou = 0;
        let entregador;
        for(let i = 0 ; i < listaEntregador.length ; i++){
            if(listaEntregador[i].nome.toLowerCase().startsWith(document.getElementById("inputIdEntregador").value.toLowerCase())){
                achou = true;
                ondeAchou = i;
            }
        }
        if(achou){
            entregador =  "<div class='container valida'>"+
                            listaEntregador[ondeAchou].imprime() +
                            "</div>";
        } else {
            entregador = "<h3 class='erroValida'>Entregador nao encontrado</h3>";
        }

        document.getElementById("validaEntregador").innerHTML = entregador;
    }
}

function cadastraPedido(){
    let cliente = document.getElementById("validaCliente");
    let lanche = document.getElementById("validaLanche");
    let suco = document.getElementById("validaSuco");
    let entregador = document.getElementById("validaEntregador");

    if(
        cliente.innerHTML != "" &&
        lanche.innerHTML != "" &&
        suco.innerHTML != "" &&
        entregador.innerHTML != ""
    ){
        listaPedido.push(new Pedido(cliente.innerHTML,
                                    entregador.innerHTML,
                                    suco.innerHTML,
                                    lanche.innerHTML));
    } else {
        window.alert("TODOS OS CAMPOS SÃO OBRIGATÓRIOS");
    }
}