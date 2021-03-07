import { Request, Response } from 'express';
import axios from 'axios';

import { IMovie } from '../model/movie';

const movies: IMovie[] = [];

function sorted(movies: IMovie) {
  return movies.sort((a, b) => a.titulo.localeCompare(b.titulo));
}

async function getAllMovies(req: Request, res: Response, next: any) {
  const api = axios.create({
    baseURL: 'http://copafilmes.azurewebsites.net/api/filmes',
  });

  const moviesJson = await api.get('');
  const movies = moviesJson.data;
  const movieSorted = sorted(movies);

  res.json(movieSorted);
}

function addVotation(req: Request, res: Response, next: any) {
  try {
    const newVotation = req.body as IMovie;

    if (Object.keys(newVotation).length != 8)
      return res.json({ Error: 'Numbre the movies to votation have 8' });

    movies.push(newVotation);
    res.status(201).json(newVotation);
  } catch (error) {
    console.log(error);
    res.status(400);
  }
}

export default { getAllMovies, addVotation };
