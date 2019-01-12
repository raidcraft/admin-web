import * as Sequelize from 'sequelize';
import { sequelize } from '../instances/sequelize';
import { IEquipmentAddModel, IEquipmentModel, Equipment } from './equipment.model';

export interface IWeaponAddModel extends IEquipmentAddModel {
  weapon_type: string;
  min_damage: number;
  max_damage: number;
  swing_time: number;
  equipment_id: number;
}

export interface IWeaponModel extends IWeaponAddModel, Sequelize.Model<IWeaponModel, IWeaponAddModel> {
  id: number;
  equipment: IEquipmentModel;
}

export const Weapon = sequelize.define<IWeaponModel, IWeaponAddModel>('rcitems_weapons', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  equipment_id: {
    type: Sequelize.INTEGER
  },
  weapon_type: {
    type: Sequelize.STRING,
    defaultValue: 'SWORD'
  },
  min_damage: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  max_damage: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  swing_time: {
    type: Sequelize.DOUBLE,
    defaultValue: 1
  },
});

Equipment.hasOne(Weapon, {
  foreignKey: 'equipment_id',
  as: 'weapon',
  onDelete: 'CASCADE',
  hooks: true
});

Weapon.belongsTo(Equipment);
