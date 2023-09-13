
// typescript possui inferencia de tipos

function sum(num1: number, num2: number): number {  // <= Nesses casos sempre utlizaremos a tipagem para ter certeza que os dados de entrada estão no tipo corretos. O mesmo vale para a função.
    return num1 + num2;
}

// Caso a funçäo não tenha retorno devemos usar o tipo void.

const num: number = 500;
const text: string = "quinhentos";     // <= Nesses tipos de declaracoes, não será necessário definir a tipagem, a inferencia do ts é suficiente
const valid: boolean = true;

//Outros tipos primitivos: enum, unknow, never, undefined, null

const result = sum(16, 15);


console.log(result);