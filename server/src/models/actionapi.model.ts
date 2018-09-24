import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';

export interface IActionApiAddModel {
  action_type: string;
  name: string;
  description: string;
  conf: string;
}

export interface IActionApiModel extends Sequelize.Model<IActionApiModel, IActionApiAddModel> {
  id: number;
}

export const ActionApi = sequelize.define<IActionApiModel, IActionApiAddModel>('rc_actionapi', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  action_type: Sequelize.STRING,
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  conf: Sequelize.STRING
});
