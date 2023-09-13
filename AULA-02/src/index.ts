function sum(num1: number, num2: number) {
    return num1 + num2;
}

//lembrar de instalar o ts-node, que permite a exercução de código TypeScript diretamente no ambiente Node.js

const result = sum(16, 15);

// Ao instalar o TypeScipt como devdep temos acesso ao tsc (typescript compiler)

// npx tsc --init cria um arquivo de configuração ts

// dependencias de desenvolvedor instaladas nesta etapa: nodemon, ts-node e typescript

console.log(result);