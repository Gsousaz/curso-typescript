import express, { Request, Response, json } from 'express';
import { User } from '../protocols/user-protocol';

const app = express();
app.use(json());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('OK');
})

app.post('/posts', (req: Request, res: Response) => {
  const body = req.body as User;
  console.log(body.email);
  res.sendStatus(201);
})


app.listen(500, () => {
  console.log('server is up and running')
})

function checkUser(user: User) {
    //qualquer coisa
}