const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
})

const minhaPrimeiraConstante = 'Minha primeira constante';
console.log(minhaPrimeiraConstante);

let leituraCampo;
readLine.question(`Por favor, digite alguma coisa: `, input => {
    leituraCampo = input;
    console.log(`O usuario digitou: ${leituraCampo}`);
    process.exit(0);
});


