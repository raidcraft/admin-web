import { Items, ITemsAddModel, IEquipmentAddModel, Equipment, IItemsModel, IEquipmentModel } from 'models';
import { Armor, IArmorAddModel } from 'models/armor.model';
import { Weapon, IWeaponAddModel } from 'models/weapon.model';
import { Attributes } from 'models/attribute.model';

export class ItemsService {

  private readonly itemInclude = {
    model: Equipment,
    as: 'equipment',
    include: [{
      model: Armor,
      as: 'armor'
    },
    {
      model: Weapon,
      as: 'weapon'
    },
    {
      model: Attributes,
      as: 'attributes'
    }]
  };

  public getAll() {
    return Items.all({
      include: [this.itemInclude]
    });
  }

  public getItemById(id: number) {
    return Items.findById(id, {
      include: [this.itemInclude]
    });
  }

  public async createItem(item: ITemsAddModel) {
    const result = await Items.create(item).then(async model => {
      switch (model.item_type) {
        case 'EQUIPMENT':
          return await this.createEquipment(item, model).then(() => model);
        case 'ARMOR':
          return await this.createEquipment(item, model).then(async equipment => {
            return await Armor.create({
              ...item as IArmorAddModel,
              equipment_id: equipment.id
            });
          }).then(() => model);
        case 'WEAPON':
          return await this.createEquipment(item, model).then(async equipment => {
            return await Weapon.create({
              ...item as IWeaponAddModel,
              equipment_id: equipment.id
            });
          }).then(() => model);
        default:
          return model;
      }
    });

    return await this.getItemById(result.id);
  }

  private createEquipment(item: ITemsAddModel, dbEntry: IItemsModel) {
    const model = item as IEquipmentAddModel;
    return Equipment.create({
      ...model,
      item_id: dbEntry.id
    }).then(equipment => {
      model.attributes = (model.attributes && model.attributes
        .map(attribute => ({ ...attribute, equipment_id: equipment.id }))) || [];
      return Attributes.bulkCreate(model.attributes).then(() => equipment);
    });
  }

  public async updateItem(id: number, item: ITemsAddModel) {
    const model = await this.getItemById(id);
    model.update(item);
    return await this.getItemById(id);
  }

  public async deleteItem(id: number) {
    const model = await this.getItemById(id);
    return await model.destroy({cascade: true});
  }
}
