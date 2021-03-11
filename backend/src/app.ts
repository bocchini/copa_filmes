import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import moviesRouter from './routes/movies.router';
import votationRouter from './routes/votation.router';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(moviesRouter);
app.use(votationRouter);

export default app;
