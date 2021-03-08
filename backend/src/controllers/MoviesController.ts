import { Request, Response } from 'express';
import axios from 'axios';

import { IMovie } from '../model/movie';

const movies: IMovie[] = [];
const votation: IVotation[] = [];
interface IVotation {
  id: [string[]];
}

function sorted(movies: any) {
  return movies.sort((a: IMovie, b: IMovie) =>
    a.titulo.localeCompare(b.titulo),
  );
}

async function getAllMovies(req: Request, res: Response, next: any) {
  try {
    const api = axios.create({
      baseURL: 'http://copafilmes.azurewebsites.net/api/filmes',
    });

    const moviesJson = await api.get('');
    const movieSorted = sorted(moviesJson.data);

    for (let index = 0; index < movieSorted.length; index++) {
      movies.push(movieSorted[index]);
    }

    return res.status(200).json(movieSorted);
  } catch {
    return res
      .status(400)
      .json({ Error: 'Server internal error, please contact the support' });
  }
}

function addVotation(req: Request, res: Response, next: any) {
  try {
    const newVotation = req.body;
    console.log(newVotation.id === undefined);

    if (newVotation.id === undefined)
      return res
        .status(404)
        .json({
          Error: 'Error the key',
        })
        .end();

    if (newVotation.id.length != 8)
      return res
        .status(400)
        .json({ Error: 'Number the movies to votation have 8' });

    newVotation.id.forEach((movieToVotation: string) => {
      const idExist = movies.findIndex((movie) => movie.id === movieToVotation);
      if (idExist === -1) {
        res
          .status(404)
          .json({
            Error:
              'One movie or more movies don´t exists please verify the list movie',
          })
          .end();
      }
    });
    votation.push(newVotation);
    res.status(201).json(newVotation);
  } catch (error) {
    res.status(400);
  }
}

function getVotation(req: Request, res: Response, next: any) {
  return res.json(movies);
}

export default { getAllMovies, addVotation, getVotation };
