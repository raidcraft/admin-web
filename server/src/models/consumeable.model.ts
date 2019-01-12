import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';
import { Items, IItemsModel, ITemsAddModel } from './items.model';
import { IAttributeAddModel } from './attribute.model';

export interface IConsumeableAddModel extends ITemsAddModel {
  item_id: number;
  type: string;
  resource_name: string;
  resource_gain: number;
  percentage: boolean;
  instant: boolean;
  intervall: string;
  duration: string;
}

export interface IConsumeableModel extends IConsumeableAddModel, Sequelize.Model<IConsumeableModel, IConsumeableAddModel> {
  id: number;
  item: IItemsModel;
}

export const Consumeable = sequelize.define<IConsumeableModel, IConsumeableAddModel>('rcitems_consumeables', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  item_id: {
    type: Sequelize.INTEGER
  },
  resource_gain: {
    type: Sequelize.DOUBLE,
    defaultValue: 0.0
  },
  type: {
    type: Sequelize.STRING,
    defaultValue: 'HEALTH'
  },
  resource_name: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  instant: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  percentage: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  intervall: {
    type: Sequelize.STRING,
    defaultValue: null
  },
  duration: {
    type: Sequelize.STRING,
    defaultValue: null
  }
});

Items.hasOne(Consumeable, {
  foreignKey: 'item_id',
  as: 'consumeable',
  onDelete: 'CASCADE',
  hooks: true
});

Consumeable.belongsTo(Items, { foreignKey: 'item_id' });
