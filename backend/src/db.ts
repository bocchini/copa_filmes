import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/' + process.env.DB_NAME,
});

export default sequelize;
