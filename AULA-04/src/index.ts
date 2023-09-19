// ----------------------------- UNION TYPES ------------------------------------//

function printId(id: number | string): void {
    //type guard:
    if (typeof id === 'string') {
        console.log(`Your id is: ${id.toUpperCase()}`);
    } else {
        console.log(`Your id is: ${id}`)
    }
}
// Tambem posso usar || nas funções para ter certeza que estou recebendo sempre os resultados do tipo correto!
printId(1);

// O id normalemnte vai ser um numero que sera inserido no banco, mas pode ser uma hash ou ate mesmo uma string,dependendo da situação.


//---------------------------------------------------------  Exercicio  --------------------------------------------------------------------//

// Tipar é divertido (há controvérsias) e torna o código mais seguro, no entanto, nem sempre é tão fácil de fazer.
// A função prompt() do navegador pode retornar string | null.
// Tipe o código a seguir e faça as validações e conversões necessárias para que o código seja executado somente se números forem usados.
// Faça quaisquer conversões e alterações necessárias para garantir que o resultado final seja um número. Se não for o caso, exiba uma mensagem dizendo que não é possível executar com tal entrada.

function multiply(num1: number, num2: number) { // Neste caso considerei a inferencia do ts como suficiente já que não terei entradas de outro tipo além do desejado. 
    return num1 * num2;
}

function sum(num1: number, num2: number) { // Neste caso considerei a inferencia do ts como suficiente já que não terei entradas de outro tipo além do desejado. 
    return num1 + num2;
}

function isEven(num: number) {// Neste caso considerei a inferencia do ts como suficiente já que não terei entradas de outro tipo além do desejado. 
    return num % 2 === 0;
}

function showResult(result: number) {
    if (isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    // Removi os prompts pois não é possível utilizá-los no ambiente Node
    const num1: number | string = 1; 
    if (typeof num1 === 'string' || num1 === null ) {
        return console.log('The first number isn`t valid!')
    }

    const num2: number | string = 'ds';
    if (typeof num2 === 'string' || num2 === null ) {
        return console.log('The second number isn`t valid!')
    }
    let result = sum(num1, num2);
    result = result * 2;
    showResult(result);
})();
