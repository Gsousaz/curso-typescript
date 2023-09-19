function sum(num1: number, num2: number) {
    return num1 + num2;
}

// Lembrar de instalar o ts-node, que permite a exercução de código TypeScript diretamente no ambiente Node. 

const result = sum(16, 15);

// Ao instalar o TypeScipt como devdep temos acesso ao tsc (typescript compiler)

// npx tsc --init cria um arquivo de configuração ts

// dependencias de desenvolvedor instaladas nesta etapa: nodemon, ts-node e typescript

// compilar os arquivos ts em arquivos js com o tsc: npx tsc ARQUIVO.ts:
// O tsc gera um arquivo com o mesmo node e a extensão .js que será executada pelo Node


console.log(result);