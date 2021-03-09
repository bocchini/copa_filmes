import Joi from 'joi';

const votationSchema = Joi.object({
  id: Joi.number(),
  idMovie: Joi.number(),
});

export { votationSchema };
