export interface IMovie {
  id: string;
  titulo: string;
  ano: Date;
  nota: number;
}

import Joi from 'joi';
const movieSchema = Joi.object({
  id: Joi.array().items().required(),
  titulo: Joi.string().alphanum(),
  ano: Joi.date(),
  nota: Joi.number(),
});

export { movieSchema };
