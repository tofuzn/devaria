const { exit } = require('process');

const readLine = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
})

const validarNumero = numero => {
    const numeroValidado = Number.parseFloat(numero);
    if(!numeroValidado) {
        console.log("O número digitado não é válido!");
        process.exit(1);
    } else {
        return numeroValidado;
    }
}


const validarOperador = operadorValidado => {
    switch(operadorValidado) {
        case '+' :
        case '-' :
        case '*' :
        case '/' :
        case '%' :
            return operadorValidado;
        default :
            console.log('Operador não é válido!');
            process.exit(1);
    }
}


readLine.question('Por favor, digite um número: ', numero1 => {
    const n1 = validarNumero(numero1);

    if (n1) {
        readLine.question('Por favor, digite outro número: ', numero2 => {
            const n2 = validarNumero(numero2);

            if (n2) {
                readLine.question('Por favor, informe o operador: ', operadorInformado => {
                    const operador = validarOperador(operadorInformado);

                    if (operador) {
                        switch (operador) {
                            case '+' :
                                console.log(`Operador escolhido: ${operador}`);
                                console.log(`${n1} + ${n2} = ${n1 + n2}`);
                                process.exit(0);
                            case '-' :
                                console.log(`Operador escolhido: ${operador}`);
                                console.log(`${n1} - ${n2} = ${n1 - n2}`);
                                process.exit(0);
                            case '*' :
                                console.log(`Operador escolhido: ${operador}`);
                                console.log(`${n1} * ${n2} = ${n1 * n2}`);
                                process.exit(0);
                            case '/' :
                                console.log(`Operador escolhido: ${operador}`);
                                console.log(`${n1} / ${n2} = ${n1 / n2}`);
                                process.exit(0);
                            case '%' :
                                console.log(`Operador escolhido: ${operador}`);
                                console.log(`${n1} % ${n2} = ${n1 % n2}`);
                                process.exit(0);
                            // como já esta sendo validado anteriormente, não há a necessidade de usar o default aqui 
                            // pois nesse caso, nunca vai receber um input diferente dos case acima!!
                        }
                    }
                })
            }
        })
    }
});