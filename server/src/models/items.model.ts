import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';

export interface ITemsAddModel {
  name: string;
  lore: string;
  minecraft_item: string;
  minecraft_data_value: number;
  item_level: number;
  quality: string;
  max_stack_size: number;
  sell_price: number;
  bind_type: string;
  item_type: string;
  block_useage: boolean;
  lootable: boolean;
  enchantment_effect: boolean;
  info: string;
}

export interface IItemsModel extends ITemsAddModel, Sequelize.Model<IItemsModel, ITemsAddModel> {
  id: number;
}

export const Items = sequelize.define<IItemsModel, ITemsAddModel>('rcitems_items', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  lore: Sequelize.STRING,
  minecraft_item: Sequelize.STRING,
  minecraft_data_value: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  item_level: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  quality: {
    type: Sequelize.STRING,
    defaultValue: 'COMMON'
  },
  max_stack_size: {
    type: Sequelize.INTEGER,
    defaultValue: 64
  },
  sell_price: {
    type: Sequelize.DOUBLE,
    defaultValue: 0
  },
  bind_type: {
    type: Sequelize.STRING,
    defaultValue: 'NONE'
  },
  item_type: {
    type: Sequelize.STRING,
    defaultValue: 'UNDEFINED'
  },
  block_usage: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  lootable: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  enchantment_effect: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  info: Sequelize.STRING
});
