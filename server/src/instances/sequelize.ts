import * as Sequelize from 'sequelize';
import { Items, Equipment } from 'models';

const db = 'minecraft';
const username = 'minecraft';
const password = 'password';

export const sequelize = new Sequelize(db, username, password, {
  dialect: 'mysql',
  port: 3306,
  define: {
    timestamps: false,
    freezeTableName: true
  }
});

sequelize.authenticate();