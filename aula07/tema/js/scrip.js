function trocatitulo(objeto) {
    let titulo = document.getElementById(objeto);
    if (titulo.style.fontSize == "10pt")
        titulo.style = "font-size: 18pt; color: red;";
    else
        titulo.style = "font-size: 10pt;";
}

function trocacor(elemento) {
    let objeto = document.getElementById(elemento);

    if (objeto.style.color === "red") {
        objeto.style.color = "black";
    } else {
        objeto.style.color = "red";
    }
}

function mudatema() {
    let span = document.getElementById("tema");

    if (document.body.style.backgroundColor === "black") {
        document.body.style = "background-color: white; color: black;";
        span.innerHTML = "nodo claro";
    } else {
        document.body.style = "background-color: black; color: white;";
        span.innerHTML = "modo escuro"
    }
}

function tiraObjeto(objeto, btn) {

    let elemento = document.getElementById(objeto);

    let botao = document.getElementById(btn);

    let p = document.getElementById("p1");

    if (elemento.style.display === "none") {

        elemento.style.display = "block";
        p.style.display = "block";
        botao.value = "Tira Titulo";
    }

    else {

        elemento.style.display = "none";
         p.style.display = "nome";
        botao.value = "Coloca Titulo";

    }

}