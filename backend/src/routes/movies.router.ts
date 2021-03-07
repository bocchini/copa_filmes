import { Router, Request, Response } from 'express';

import MovieController from '../controllers/MoviesController';

const router = Router();

router.get('/', MovieController.getAllMovies);
router.post('/', MovieController.addVotation);

export default router;
