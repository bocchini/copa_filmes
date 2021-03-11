import { Sequelize } from 'sequelize';

const sqlite = process.env.DB_NAME;

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/' + sqlite,
});

export default sequelize;
