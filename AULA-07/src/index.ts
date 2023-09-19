//---------------------------------------------------------  Exercicio  --------------------------------------------------------------------//

import express, { Request, Response } from "express";

const app = express();

app.get("/health", (req: Request, res: Response) => res.status(200).send("I'm Ok!"));
app.get("/today", (req: Request, res: Response) => {
  res.send({
    today: new Date().toLocaleDateString("pt-br")
  })
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));

// Sintaxe npm i -D @types/express faz com que eu consiga instalar os types da biblioteca express sem precisar definir todos um a um <3 TY COMMUNITY
// Neste exemplo instalamos @types/express e @types/node



// O TS realmente nos ajuda muito dando a possibilidade de tipar variáveis, parâmetros, funções, etc… mas um problema surge quando precisamos usar um código que não é nosso.
// Usando a biblioteca de DefinitionTypes, faça a tipagem da API. ( o projeto está em JS puro, faça as conversões necessárias).
