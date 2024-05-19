class  Pessoa{
    nome;
    telefone;
    email;
};

class PessoaFisica extends Pessoa{
    nascimento;
    cpf;
};

let pf = new PessoaFisica();

pf.nome = "juca";
pf.email = "445465232.com";
pf.telefone = "24548545";
pf.nascimento = "1887-85-44";
pf.cpf = "211.565.444-25";

console.log(pf);


class PessoaJuridica extends Pessoa{
    cnpj;
    inscricaoEstadual;
    razaoSocial; 

    constructor(nome,telefone,email,cnpj,inscricao,razao){

        super();

        super.nome = nome;
        super.email = email;
        super.telefone = telefone;

        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricao;
        this.razaoSocial = razao;
    }
};

let pj = new PessoaJuridica("Step Computer","2253-1177","lucas@itstep.org",
                            "123456/0001-12", 213153, "Step LTDA");
console.log(pj)

class Aluno extends Pessoa{
    matricula;
}

class Professor extends Pessoa{
    matriculaFuncionario;
    turno;
    materias;
}
