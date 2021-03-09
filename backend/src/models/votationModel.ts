import Sequelize, { Model, Optional } from 'sequelize';

import db from '../db';

import { IVotation } from './votation';

interface MovieCreationAttributes extends Optional<IVotation, 'id'> {}

export interface VotationModel
  extends Model<IVotation, MovieCreationAttributes>,
    IVotation {}

const movieModel = db.define<VotationModel>('votation', {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  idMovie: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

function findAll() {
  return movieModel.findAll<VotationModel>();
}

function findById(id: number) {
  return movieModel.findByPk<VotationModel>(id);
}

function addVotation(votation: IVotation) {
  movieModel.create(votation);
}

export default { findAll, findById, addVotation };
