import { Router } from 'express';
import {
  validateMovie,
  validateId,
} from '../middlewares/middlewareMoviesValidation';

import MovieController from '../controllers/MoviesController';

const router = Router();

router.get('/', MovieController.getAllMovies);
//router.get('/:id', validateId, MovieController.getById);

export default router;
