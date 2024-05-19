

class Veiculo{
    modelo;
    fabricante;
    ano;
    cor;

    constructor(modelo,fabricante,ano,cor){
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.ano = ano;
        this.cor = cor;
    }

    imprime(){};
}

class Carro extends Veiculo{
    cambio;
    motor;
    ar;

    constructor(modelo,fabricante,ano,cor, cambio, motor,ar){
        super(modelo,fabricante,ano,cor);
        this.cambio = cambio;
        this.ar = ar;
        this.motor = motor;
    }

    imprime(){
        let imprimir =  "Modelo: " + this.modelo + "<br/>" +
                        "Fabricante: " + this.fabricante + "<br/>" +
                        "Ano: " + this.ano + "<br/>" +
                        "Cor: " + this.cor + "<br/>" +
                        "Motor: " + this.motor + "<br/>";
                        
        if(this.cambio == '1'){
            imprimir += "Câmbio: Manual<br/>" ;
        }else{
            imprimir += "Câmbio: Automático<br/>" ;
        }

        if(this.ar){
            imprimir += "Ar: SIM <br/>";
        } else{
            imprimir += "Ar: NÃO <br/>";
        }

        return imprimir;
    }
}

class Moto extends Veiculo{
    cc;

    constructor(modelo,fabricante,ano,cor,cc){
        super(modelo,fabricante,ano,cor);
        this.cc = cc;
    }

    imprime(){
        let imprimir =  "Modelo: " + this.modelo + "<br/>" +
                        "Fabricante: " + this.fabricante + "<br/>" +
                        "Ano: " + this.ano + "<br/>" +
                        "Cor: " + this.cor + "<br/>" +
                        "CC: " + this.cc + "<br/>";


        return imprimir;
    }
}


var listaCarros = [];
var listaMotos = [];




function tipoVeiculo(){
    if(document.getElementById("selectCadastro").value == "1"){
        document.getElementById("motor").style.display = "block";
        document.getElementById("cambio").style.display = "block";
        document.getElementById("ar").style.display = "block";

        document.getElementById("cc").style.display = "none";
    } else {
        document.getElementById("motor").style.display = "none";
        document.getElementById("cambio").style.display = "none";
        document.getElementById("ar").style.display = "none";

        document.getElementById("cc").style.display = "block";

    }
}

function cadastrar(){
    if(document.getElementById("selectCadastro").value == "1"){//carro
        listaCarros.push(new Carro(
            document.getElementById("inputModelo").value,
            document.getElementById("inputFabricante").value,
            Number(document.getElementById("inputAno").value),
            document.getElementById("inputCor").value,
            document.getElementById("selectCambio").value,
            document.getElementById("inputMotor").value,
            document.getElementById("checkAr").checked
            
        ));
    }else{//moto
        listaMotos.push(new Moto(
            document.getElementById("inputModelo").value,
            document.getElementById("inputFabricante").value,
            Number(document.getElementById("inputAno").value),
            document.getElementById("inputCor").value,
            document.getElementById("inputCc").value
        ));
    }

    document.cadVeiculos.reset();
}

function exibirCadastros(){
    document.getElementById("resultado").style.display = "block";

    let relatorio = "<h3>Carros</h3>";

    if(listaCarros.length < 1){
        relatorio += "<br/>SEM CARROS CADASTRADOS<br/>";
    } else {
        for(let i = 0; i<listaCarros.length ; i++){
            relatorio +=    "<div class='resultado'>"+
                            listaCarros[i].imprime() +
                            "</div>";
        }
    }

    relatorio += "<hr> <h3>Motos</h3>";

    if(listaMotos.length < 1){
        relatorio += "<br/>SEM MOTOS CADASTRADAS<br/>"
    } else{
        for(let i = 0 ; i < listaMotos.length ; i++){
            relatorio +=    "<div class='resultado'>"+
                            listaMotos[i].imprime() +
                            "</div>";
        }
    }

    document.getElementById('relatorio').innerHTML = relatorio;
}