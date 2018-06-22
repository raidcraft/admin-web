import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';
import { IEquipmentAddModel, IEquipmentModel, Equipment } from './equipment.model';

export interface IArmorAddModel extends IEquipmentAddModel {
  armor_type: string;
  armor_value: number;
  equipment_id: number;
}

export interface IArmorModel extends IArmorAddModel, Sequelize.Model<IArmorModel, IArmorAddModel> {
  id: number;
  equipment: IEquipmentModel;
}

export const Armor = sequelize.define<IArmorModel, IArmorAddModel>('rcitems_armor', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  equipment_id: {
    type: Sequelize.INTEGER
  },
  armor_value: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  armor_type: {
    type: Sequelize.STRING,
    defaultValue: 'CLOTH'
  }
});

Equipment.hasOne(Armor, {
  foreignKey: {
    name: 'equipment_id',
    allowNull: false
  },
  as: 'armor',
  onDelete: 'CASCADE'
});

Armor.belongsTo(Equipment, {
  foreignKey: {
    name: 'equipment_id'
  },
  as: 'armor',
  onDelete: 'CASCADE'
});
