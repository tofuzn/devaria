const listaArgumentos = process.argv.slice(2);
const lenLista = listaArgumentos.length;

console.log('----executando um FOR----');

for (let i = 0; i < lenLista ; i++) {
    console.log(`Posição ${i} = ${listaArgumentos[i]}`);
}

console.log('----executando um WHILE----');

let j = 0;
while (j < lenLista) {
    console.log(`Posição ${j} = ${listaArgumentos[j]}`);
    j++;
}

console.log(`----executando um DO WHILE----`);

let k = 0;
do {
    console.log(`Posição ${k} = ${listaArgumentos[k]}`);
    k++;
} while(k < lenLista);

console.log(`----executando um FOR OF----`);

let l = 0;
for (const argumento of listaArgumentos) {
    console.log(`Posição ${l} = ${argumento}`);
    l++;
}