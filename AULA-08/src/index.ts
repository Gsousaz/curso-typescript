
//---------------------------------------------------------  Exercicio  --------------------------------------------------------------------//

// Podemos tipar objetos de uma forma relativamente simples, mas que acaba gerando um custo muito alto de manutenção no médio-longo prazo.
// Refatore o código abaixo para usar type.


type Game = {
  id: number;
  platform: {
    id: number;
    name: string;
  };
  title: string;
  publisher: string;
  launch?: string | Date;
}

const theLastOfUs: Game = {
  id: 1,
  platform: {
    id: 1,
    name: "Playstation"
  },
  title: "The Last of Us",
  publisher: "Naughty Dog",
  launch: "2013-06-14" // pode ser um Date. também pode ser vazio
}

type Games = Game[]

function play(game: Game) {
  // runs the game
  console.log(game);
}

play(theLastOfUs)