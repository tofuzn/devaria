const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
})

// console.log('Verificar se voce é maior de 18 anos e se possui CNH');
// console.log('Alem disso, será verificado se voce está na lista de presença');


readLine.question(`Qual o ano do seu nascimento? `, ano => {
    let idade = 2022 - ano;
    if (idade < 18){
        console.log(`Voce ainda nao tem 18 anos. Sua idade é: ${idade} anos`);
        readLine.close();
    } else {
        console.log(`Voce é maior de idade. Sua idade é: ${idade} anos`);
        readLine.question(`Voce tem CNH? (Sim/Nao) `, respostaHabilitacao => {
            if (!(respostaHabilitacao.toUpperCase() == 'SIM')){
                console.log('Voce nao tem CNH. Logo nao pode entrar no Kart!');
                readLine.close();    
            } else {
                readLine.question(`Qual é o seu nome? `, nome => {
                    switch (nome){
                        case 'Luiz' : 
                            console.log(`Bem vindo ao Kart, ${nome}.`);
                            break;
                        case `Ricardo` : 
                            console.log(`Bem vindo ao Kart, ${nome}.`);
                            break;
                        default :
                            console.log(`O nome: "${nome}" , nao consta na lista de presença.`);
                    }
                    readLine.close();
                })
            }
        })
        
    }
})