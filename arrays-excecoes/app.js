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

for (let i = 0; i < lenListaMercado; i++) {
    for (let j = 0; j < lenProdutosDisponiveis; j++) {
        if (listaMercado[i] == produtosDisponiveis[j]) {
            console.log(`encontrado: ${listaMercado[i]}`);
        } else {
            console.log(`nao encontrado: ${listaMercado[i]}`);
        }
    }
}





