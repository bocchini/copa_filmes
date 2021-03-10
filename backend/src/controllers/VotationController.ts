import { Request, Response } from 'express';

import movieModel from '../models/movieModel';
import { IMovie } from '../models/movie';

let movies: IMovie[] = [];

function Votation() {
  let votation = [...movies];
  let firstVotation = [];
  for (let index = 0; index < votation.length; index++) {
    const last = votation.pop();
    const first = votation[index];
    if (!last || !first) break;
    firstVotation.push(investigateVotation(first, last));
  }

  const secondVotation = [];
  secondVotation.push(investigateVotation(firstVotation[0], firstVotation[1]));
  secondVotation.push(investigateVotation(firstVotation[2], firstVotation[3]));

  const result = investigateVotation(secondVotation[0], secondVotation[1]);

  const idSecond = secondVotation.findIndex(
    (secondPlace) => result.id != secondPlace.id,
  );

  const results = [result, secondVotation[idSecond]];
  return results;
}

function investigateVotation(first, second) {
  let winner;
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
    const newVotation = req.body;

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
        const movieVote = await movieModel.findById(parseInt(vote));

        if (!movieVote) {
          return res.status(400).json({ Error: 'One or more movies no exist' });
        }
        return movieVote;
      }),
    );
    movies = [...listMovies];

    const winners = Votation();

    res.status(201).json(winners);
  } catch (error) {
    res.status(400);
  }
}

function getVotation(req: Request, res: Response, next: any) {
  return res.json();
}

export default { getVotation, addVotation };
