import { Request, Response } from 'express';

import { votationSchema } from '../models/votationSchemas';

function validateVotation(req: Request, res: Response, next: any) {
  const { error } = votationSchema.validate(req.body);
  if (error == null) return next();

  const { details } = error;
  const message = details.map((item) => item.message).join(',');
  console.log(message);
  res.status(422).end();
}

export { validateVotation };
