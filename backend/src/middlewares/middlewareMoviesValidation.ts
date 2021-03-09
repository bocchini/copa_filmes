import { Request, Response } from 'express';

import { movieSchema, movieSchemaById } from '../models/movieSchemas';

function validateMovie(req: Request, res: Response, next: any) {
  const { error } = movieSchema.validate(req.body);
  if (error == null) return next();

  const { details } = error;
  const message = details.map((item) => item.message).join(',');
  console.log(message);
  res.status(422).end();
}

function validateId(req: Request, res: Response, next: any) {
  const { error } = movieSchema.validate(req.params.id);

  if (error == null) return next();

  const { details } = error;
  const message = details.map((item) => item.message).join(',');
  console.log(message);
  res.status(422).end();
}

export { validateMovie, validateId };
