import { Request, Response } from 'express';

import repositoy from '../models/movieModel';

async function getAllMovies(req: Request, res: Response, next: any) {
  try {
    const allMovie = await repositoy.findAll();

    if (allMovie === null) return res.json();
    return res.status(200).json(allMovie);
  } catch {
    return res
      .status(400)
      .json({ Error: 'Server internal error, please contact the support' });
  }
}

async function getById(req: Request, res: Response, next: any) {
  try {
    const id = parseInt(req.params.id);
    if (!id) throw new Error('ID is valid format');

    const movie = await repositoy.findById(id);
    if (movie === null) return res.status(404).end();
    else return res.json(movie);
  } catch (error) {
    return res.status(400).end();
  }
}

export default { getAllMovies, getById };
