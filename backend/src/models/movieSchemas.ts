import Joi from 'joi';

const movieSchema = Joi.object({
  id: Joi.number(),
  titulo: Joi.string().alphanum(),
  ano: Joi.date(),
  nota: Joi.number(),
  idapi: Joi.array().items().required(),
});

const movieSchemaById = Joi.object({
  id: Joi.number().required(),
});

export { movieSchema, movieSchemaById };
