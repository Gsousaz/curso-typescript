
// typescript possui inferencia de tipos

function somar(num1: number, num2: number): number {  // <= Nesses casos (assinatura) sempre utlizaremos a tipagem para ter certeza que os dados de entrada estão no tipo corretos. O mesmo vale para a tipagem da função.
    return num1 + num2;
}

// Caso a funçäo não tenha retorno devemos usar o tipo void.

const numero: number = 500;
const texto: string = "quinhentos";     // <= Nesses tipos de declaracoes, normalmente não será necessário definir a tipagem, a inferencia do ts é suficiente
const valido: boolean = true;

const a = numero + texto; // <= Este é um exemplo de função que não é interessante usar a inferencia de tipos, pois pelos tipos de dados de entrada ele esperaria uma string, então precisarei definir o tipo de resultado esperado caso não seja este a fim de evitar erros.

//Outros tipos primitivos: enum, unknow, never, undefined, null

const result = somar(16, 15);


console.log(result);

//---------------------------------------------------------  Exercicio  --------------------------------------------------------------------//

// Podemos aplicar a tipagem em vários locais diferentes da aplicação.
// Mas nem sempre a tipagem explícita é necessária por conta da inferência de tipos do TS.
// Refatore o código TS a seguir colocando os tipos onde julgar necessário.

function multiply(num1: number, num2: number) {
    return num1 * num2;
}

function sum(num1: number, num2: number) {
    return num1 + num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(result: number): void {
    if (isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}


