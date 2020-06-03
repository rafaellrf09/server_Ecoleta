import express from 'express';
import path from "path";
import routes from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(bodyParser.json())

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, "..", "uploads")));

app.listen(3333);
console.log("Servidor rodando na porta 3333");