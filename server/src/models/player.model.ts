import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';

export interface IPlayerAddModel {
  nickname: string;
}

export interface IPlayerModel extends Sequelize.Model<IPlayerModel, IPlayerAddModel> {
  id: number;
  uuid: string;
  last_name: string;
  last_joined: string;
  first_joined: string;
}

export const Player = sequelize.define<IPlayerModel, IPlayerAddModel>('rc_players', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  uuid: Sequelize.STRING,
  last_name: Sequelize.STRING,
  last_joined: Sequelize.STRING,
  first_joined: Sequelize.STRING
});
