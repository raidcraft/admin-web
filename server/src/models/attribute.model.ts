import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';
import { IEquipmentAddModel, IEquipmentModel, Equipment } from './equipment.model';

export interface IAttributeAddModel {
  attribute: string;
  attribute_value: number;
  equipment_id: number;
}

export interface IAttributeModel extends IAttributeAddModel, Sequelize.Model<IAttributeModel, IAttributeAddModel> {
  id: number;
  equipment: IEquipmentModel;
}

export const Attributes = sequelize.define<IAttributeModel, IAttributeAddModel>('rcitems_equipment_attributes', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  equipment_id: {
    type: Sequelize.INTEGER
  },
  attribute_value: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  attribute: {
    type: Sequelize.STRING
  }
});

Equipment.hasMany(Attributes, {
  foreignKey: 'equipment_id',
  as: 'attributes',
  onDelete: 'CASCADE',
  hooks: true
});

Attributes.belongsTo(Equipment, { foreignKey: 'equipment_id' });
