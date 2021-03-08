import express from 'express';
//import bodyParser from 'body-parser';
import helmet from 'helmet';
import moviesRouter from './routes/movies.router';

const app = express();
app.use(helmet());
app.use(express.json());

app.use(moviesRouter);

export default app;
