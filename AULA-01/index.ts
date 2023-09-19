// O código a seguir reproduz um erro clássico que acontece quando estamos desenvolvendo em JavaScript.


// Este erro passa despercebido por falta de indicação, em tempo de desenvolvimento, de que a operação pode não ter o comportamento esperado 
// por conta dos valores arbitrários que podem ser usados.


// Usando o TypeScript, faça a tipagem dos parâmetros para evitar que uma string seja concatenada com um número.





function somar(num1: number, num2: number) {
    return num1 + num2;
}

const resultado = somar(18, 4);
console.log(resultado);