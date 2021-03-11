import Sequelize, { Model, Optional } from 'sequelize';

import db from '../db';

import { IMovie } from './movie';

interface MovieCreationAttributes extends Optional<IMovie, 'id'> {}

export interface MovieModel
  extends Model<IMovie, MovieCreationAttributes>,
    IMovie {}

const movieModel = db.define<MovieModel>('movie', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ano: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  nota: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  idapi: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

function findAll() {
  return movieModel.findAll<MovieModel>({ order: [['titulo', 'ASC']] });
}

function findById(id: number) {
  return movieModel.findByPk<MovieModel>(id);
}

function addMovie(movie: IMovie) {
  movieModel.create(movie);
}

function findByIdApi(idapi: string) {
  return movieModel.findOne({ where: { idapi } });
}

export default { findAll, findById, addMovie, findByIdApi };
