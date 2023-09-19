// Não gostei desa aula, o cod está tão extenso que nem dá pra brincar com ele, vou pra próxima

const user: {
    name: string,
    email: string,
    password: string,
    birth?: string | Date
} = {
    name: 'name',
    email: 'email@mail.com',
    password: 'password',
    birth: new Date('2012-12-12')
}

const user2: {
    name: string,
    email: string,
    password: string,
    birth?: string | Date
} = {
    name: 'name',
    email: 'email@mail.com',
    password: 'password',
    birth: new Date('2012-12-12')
}

const users: {
    name: string,
    email: string,
    password: string,
    birth?: string | Date
}[] = [user, user, user]

console.log(users);


function checkUserWithEmail(user: {
    name: string,
    email: string,
    password: string
}): void {
    console.log(user)
}

checkUserWithEmail(user)


//---------------------------------------------------------  Exercicio  --------------------------------------------------------------------//

const game: {
    id: number,
    platform: {
        id: number,
        name: string
    }
    title: string,
    publisher: string,
    launch?: string | Date
} = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation"
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14" // pode ser um Date. É opcional (para jogos ainda não lançados).
}


const games: {
    id: number,
    platform: {
        id: number,
        name: string
    }
    title: string,
    publisher: string,
    launch?: string | Date
}[] = [game];



function play(game: {
    id: number,
    platform: {
        id: number,
        name: string
    }
    title: string,
    publisher: string,
    launch?: string | Date
}) {
    // runs the game
    console.log(game);
}

play(game)


//QUE AGONIA! 