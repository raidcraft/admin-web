import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';
import { Items, IItemsModel, ITemsAddModel } from './items.model';
import { IAttributeAddModel } from './attribute.model';

export interface IEquipmentAddModel extends ITemsAddModel {
  equipment_slot: string;
  durability: number;
  item_id: number;
  attributes: IAttributeAddModel[];
}

export interface IEquipmentModel extends IEquipmentAddModel, Sequelize.Model<IEquipmentModel, IEquipmentAddModel> {
  id: number;
  item: IItemsModel;
}

export const Equipment = sequelize.define<IEquipmentModel, IEquipmentAddModel>('rcitems_equipment', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  item_id: {
    type: Sequelize.INTEGER
  },
  durability: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  equipment_slot: {
    type: Sequelize.STRING,
    defaultValue: 'INVENTORY'
  }
});

Items.hasOne(Equipment, {
  foreignKey: 'item_id',
  as: 'equipment',
  onDelete: 'CASCADE',
  hooks: true
});

Equipment.belongsTo(Items, { foreignKey: 'item_id' });
