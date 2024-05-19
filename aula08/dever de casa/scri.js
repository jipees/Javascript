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