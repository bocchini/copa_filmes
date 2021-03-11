import { Request, Response } from 'express';

import movieModel from '../models/movieModel';
import { IMovie } from '../models/movie';
interface IVotation {
  id?: number;
  titulo: string;
  ano: string;
  nota: number;
  idapi?: string;
}
interface IIds {
  id: string[];
}

let movies: IMovie[] = [];

function Votation(): IVotation[] {
  let votation = [...movies];
  let firstVotation: IVotation[] = [];
  for (let index = 0; index < votation.length; index++) {
    const last = votation.pop();
    const first = votation[index];
    if (!last || !first) break;
    firstVotation.push(investigateVotation(first, last));
  }

  const secondVotation: IVotation[] = [];
  secondVotation.push(investigateVotation(firstVotation[0], firstVotation[1]));
  secondVotation.push(investigateVotation(firstVotation[2], firstVotation[3]));

  const result = investigateVotation(secondVotation[0], secondVotation[1]);

  const idSecond = secondVotation.findIndex(
    (secondPlace) => result.id != secondPlace.id,
  );

  const results: IVotation[] = [result, secondVotation[idSecond]];
  return results;
}

function investigateVotation(first: IVotation, second: IVotation): IVotation {
  let winner: any;
  if (first.nota > second.nota) {
    winner = first;
  } else if (first.nota < second.nota) {
    winner = second;
  } else {
    winner = first.titulo.localeCompare(second.titulo);
  }
  return winner;
}

async function addVotation(req: Request, res: Response, next: any) {
  try {
    const newVotation = req.body as IIds;

    if (newVotation.id === undefined) {
      return res
        .status(404)
        .json({
          Error: 'Error the key',
        })
        .end();
    }

    const idsMovies = [...new Set(newVotation.id)];

    if (idsMovies.length != 8) {
      return res
        .status(400)
        .json({ Error: 'Number the movies to votation have 8' });
    }

    const listMovies = await Promise.all(
      idsMovies.map(async (vote) => {
        const movieVote = (await movieModel.findById(parseInt(vote))) as IMovie;

        if (!movieVote) {
          return res.status(400).json({ Error: 'One or more movies no exist' });
        }
        return movieVote as IVotation;
      }),
    );

    movies = [...listMovies];

    const winners = Votation();

    res.status(201).json(winners);
  } catch (error) {
    res.status(400);
  }
}

function getVotation(req: Request, res: Response, next: any) {}

export default { addVotation };
