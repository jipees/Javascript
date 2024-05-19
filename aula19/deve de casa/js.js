var listapessoas = [];
var cadastra = document.getElementById("for")

function cadastrar() {
    let pessoa = {
       nome: document.getElementById('nometxt').value,
        idade: document.getElementById('idadetxt').value,
       telefone: document.getElementById('teltxt').value,
        email: document.getElementById('emailtxt').value
    };
    listapessoas.push(pessoa);
  
    document.cadastro.reset();
}

function consu() {
cadastra.style.display = "block";

}
function lista() {
    let consulta = document.getElementById('tela');

    consulta.style.display = "block";

    let dados = "";

    for (let i = 0; i < listapessoas.length; i++) {

        dados += '<div class="pessoa">';
            dados += "Nome: " + listapessoas[i].nome + " <br />";
            dados += "Data de nacimento: " + listapessoas[i].idade + " <br />";
            dados += "telefone: " + listapessoas[i].telefone + " <br />";
            dados += "Email: " + listapessoas[i].email + " <br />";
            dados += "</div>";
    }

    document.getElementById('dados').innerHTML = dados;
}
