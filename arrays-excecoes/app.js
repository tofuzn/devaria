const produtosDisponiveis = [
    "Pao",
    "Cafe",
    "Leite",
    "Macarrao",
    "Detergente",
    "Abacaxi",
    "Vassoura"
]
const lenProdutosDisponiveis = produtosDisponiveis.length;
const listaMercado = process.argv.slice(2);
const lenListaMercado = listaMercado.length;

var produtosEncontrados = [];
var produtosNaoEncontrados = [];

for (let i = 0; i < lenListaMercado; i++) {
    let k = 0;
    for (let j = 0; j < lenProdutosDisponiveis; j++) {
        if (listaMercado[i] == produtosDisponiveis[j]) {
            // console.log(`encontrado: ${listaMercado[i]}`);
            k++;
        }
    }
    if (k > 0) {
        // console.log(`Produto encontrado: ${listaMercado[i]}`);
        produtosEncontrados.push(listaMercado[i]);
                
    } else {
        // console.log(`Produto nao encontrado: ${listaMercado[i]}`);s
        produtosNaoEncontrados.push(listaMercado[i]);
    }

}

produtosEncontrados.forEach(produto => {
    console.log(`ENCONTRADO: ${produto}`);
})

produtosNaoEncontrados.forEach(produto => {
    console.log(`NAO ENCONTRADO: ${produto}`);
})

produtosDisponiveis.sort();
console.log(produtosDisponiveis);





