import express from 'express';
import helmet from 'helmet';

import moviesRouter from './routes/movies.router';
import votationRouter from './routes/votation.router';

const app = express();
app.use(helmet());
app.use(express.json());

app.use(moviesRouter);
app.use(votationRouter);

export default app;
