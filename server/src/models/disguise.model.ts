import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';

export interface IDisguiseAddModel {
  alias: string;
  skin_texture: string;
  skin_signature: string;
  skin_owner: string;
  skin_url: string;
  description: string;
}

export interface IDisguiseModel extends Sequelize.Model<IDisguiseModel, IDisguiseAddModel> {
  id: number;
}

export const Disguise = sequelize.define<IDisguiseModel, IDisguiseAddModel>('rc_disguises', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  alias: Sequelize.STRING,
  skin_texture: Sequelize.STRING,
  skin_signature: Sequelize.STRING,
  skin_owner: Sequelize.STRING,
  skin_url: Sequelize.STRING,
  description: Sequelize.STRING,
  createdAt: {
    type: Sequelize.DATE,
    field: 'when_created'
  },
  updatedAt: {
    type: Sequelize.DATE,
    field: 'when_modified'
  },
  version: Sequelize.INTEGER
});
