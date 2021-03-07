import express from 'express';
//import bodyParser from 'body-parser';
import helmet from 'helmet';
import moviesRouter from './routes/movies.router';

const app = express();
app.use(helmet());
app.use(express.json());

const port = parseInt(`${process.env.PORT}`);
app.listen(port);
app.use(moviesRouter);

console.log(`Running on port ${port}`);
