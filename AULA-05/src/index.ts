const numeros: number[] = [1, 2, 3, 4, 5];
const booleanos: boolean[] = [true, true, true, false];
const frases: string[] = ['one', 'two', 'three', 'four'];

//Sintaxe alternativa abaixo:
const numeros2: Array<number> = [1, 2, 3, 4, 5];
const booleanos2: Array<boolean> = [true, true, true, false];
const frases2: Array<string> = ['one', 'two', 'three', 'four'];

// Mas e o caso abaixo?
const misturados: (string | number)[] = ['one', 2, 'three', 4];
// Não esquecer o parenteses :)
console.log(misturados)
const misturados2: Array<string | number> = ['one', 2, 'three', 4];


// tupla // tuple <= um array onde o tamanho e o tipo são pré definidos
let tupla: [number, string, number]
tupla = [1, 'two', 3]

