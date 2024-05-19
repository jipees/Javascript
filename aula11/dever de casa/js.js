var sucos = [], sanduiche = [], acompanhamentos = [];
let opcao = window.prompt("o que sera cadastrado? (1) sanduiche (2)suco (3)acampanhamento sair-fechar o cadastro");

while (opcao != "sair") {
    let nome, ingrediente = [], preco, ing;
    switch (opcao) {
        case '1':
            nome = window.prompt("digite o nome do sanduiche ou sair")
            ingrediente.push(window.prompt("digite o ingrediente ou fim para encerra:"));
            ing = "";

            while (0 == 0) {
                ing = window.prompt("Digite um novo ingrediente ou FIM para encerrar:");
                if (ing.toLowerCase() != 'fim')
                    ingrediente.push(ing);
                else
                    break;
            }
            preco = Number(window.prompt("digite o preço  do sanduiche:"))
            sanduiche.push([nome, ingrediente, preco]);
            break
        case '2':
            ingrediente.push(window.prompt("digite o sabor ou fim para encerra:"));
            ing = "";
            
            while(0==0){
                ing = window.prompt("Digite um novo ingrediente ou FIM para encerrar:");
                if(ing.toLowerCase() != 'fim')
                    ingrediente.push(ing);
                else
                    break;
            }
            preco = Number(window.prompt("digite o preço  do suco:"))
           
            sucos.push([ingrediente,preco])
            break

        case '3':
            nome = window.prompt("digite o nome do acampanhamento")
            preco = Number(window.prompt("digite o preço  do acampanhamento:"))
            acompanhamentos.push([nome, preco]);
            break;

        default:
            window.alert("opção inválida! apenas de 1 a 3")
    }
    opcao = window.prompt("o que sera cadastrado? (1) sanduiche (2)suco (3)acampanhamento ou sair");
}

console.log("Sanduiche\n=======================");
for (let i = 0; i < sanduiche.length; i++) {
    console.log("Nome: " + sanduiche[i][0]);
    console.log("Ingredientes: ");
    for (let j = 0; j < sanduiche[i][1].length; j++) {
        console.log('\t' + sanduiche[i][1][j]);
    }
    console.log("Preço: $" + sanduiche[i][2]);
}

console.log("\n\nSucos\n=======================");
for(let i = 0; i < sucos.length ; i++){
    console.log("Ingredientes: " );
    for(let j = 0; j < sucos[i][0].length; j++){
        console.log('\t' + sucos[i][0][j]);
    }
    console.log("Preço: $" + sucos[i][1]);
}


console.log("\n\nAcompanhamentos\n=======================");
for (let i = 0; i < acompanhamentos.length; i++) {
    console.log("Nome: " + acompanhamentos[i][0]);

    console.log("Preço: $" + acompanhamentos[i][1]);
}
