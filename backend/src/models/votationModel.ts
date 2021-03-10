import Sequelize, { Model, Optional } from 'sequelize';

import db from '../db';

import { IVotation } from './votation';

import { MovieModel } from './movieModel';

interface MovieCreationAttributes extends Optional<IVotation, 'id'> {}

export interface VotationModel
  extends Model<IVotation, MovieCreationAttributes>,
    IVotation {}

export const votationModel = db.define<VotationModel>('votation', {
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
  return votationModel.findAll<VotationModel>();
}

function findById(id: number) {
  return votationModel.findByPk<VotationModel>(id);
}

function addVotation(votation: IVotation) {
  votationModel.create(votation);
}

export default { findAll, findById, addVotation };
