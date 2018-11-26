import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';

export interface ITagAddModel {
  id: string;
  description: string;
}

export interface ITagModel extends Sequelize.Model<ITagModel, ITagAddModel> {
  id: string;
  description: string;
}

export const Tags = sequelize.define<ITagModel, ITagAddModel>('rc_tags', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  description: Sequelize.STRING,
});
