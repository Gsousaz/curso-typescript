function printId(id: number | string): void {
//type guard:
if (typeof id === 'string'){
    console.log(`Your id is: ${id.toUpperCase()}`);
} else {
    console.log(`Your id is: ${id}`)}
}
// Tambem posso usar || nas funções para ter certeza que estou recebendo sempre os resultados do tipo correto!
printId(1);

// O id normalemnte vai ser um numero que sera inserido no banco, mas pode ser uma hash ou ate mesmo uma string,dependendo da situação.