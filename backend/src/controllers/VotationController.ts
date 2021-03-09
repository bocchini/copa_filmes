import { Request, Response } from 'express';

function addVotation(req: Request, res: Response, next: any) {
  try {
    const newVotation = req.body;

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

    res.status(201).json(newVotation);
  } catch (error) {
    res.status(400);
  }
}

function getVotation(req: Request, res: Response, next: any) {
  return res.json();
}

export default { getVotation, addVotation };
