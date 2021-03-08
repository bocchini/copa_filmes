import { Router, Request, Response } from 'express';

import MovieController from '../controllers/MoviesController';
import { movieSchema } from '../model/movie';

function validateMovie(req: Request, res: Response, next: any) {
  const { error } = movieSchema.validate(req.body);
  if (error == null) return next();

  const { details } = error;
  const message = details.map((item) => item.message).join(',');
  //console.log(message);
  res.status(422).end();
}
const router = Router();

router.get('/', MovieController.getAllMovies);
router.post('/', validateMovie, MovieController.addVotation);
router.get('/votation', MovieController.getVotation);

export default router;
