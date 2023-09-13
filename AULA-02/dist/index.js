function sum(num1, num2) {
    return num1 + num2;
}
//lembrar de instalar o ts-node, que permite a exercução de código TypeScript diretamente no ambiente Node.js
var result = sum(16, 15);
// Ao instalar o TypeScipt como devdep temos acesso ao tsc (typescript compiler)
// npx tsc --init cria um arquivo de configuração ts
console.log(result);
