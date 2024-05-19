class Animal{
    nome;

    emiteSom(){};//delcarando função vazia

    seMove(){}; //declarando função vazia
}

class cachorro extends Animal{
    nome= "rex";
    emiteSom(){
        document.writeln("late");
    }

    seMove(){
        document.writeln("em 4 patas")
    };
}

class peixe extends Animal{
    nome = "dorado";
    emiteSom(){
        document.writeln("nao tem son");

    }

    seMove(){
        document.writeln("nada")
    }

}

let doguinho = new cachorro();

let peixinho00 = new peixe();

document.writeln(doguinho.nome);
doguinho.emiteSom();
doguinho.seMove();

document.writeln(peixinho.nome);
peixinho.emiteSom();
peixinho.seMove();