function sum(num1: number, num2: number) {
    return num1 + num2;
}

const result = sum('teste', 2);
// Ao instalar o TypeScipt como devdep temos acesso ao tsc (typescript compiler)
console.log(result);