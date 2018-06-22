import { RCItem } from "./item.model";
import { EquipmentSlot } from "./items.model";
import { RCAttribute } from "./item-attribute.model";

export class RCEquipment extends RCItem {
  equipmentSlot: EquipmentSlot;
  durability: number;
  attributes: RCAttribute[] = [];

  constructor(data?: any) {
    super(data);
    if (data) {
      this.equipmentSlot = data.equipmentSlot || data.equipment_slot;
      this.durability = data.durability;

      if (data.attributes && data.attributes.length > 0) {
        this.attributes = data.attributes.map(attribute => new RCAttribute(attribute));
      }
    }
  }

  toApiFormat(): any {
    return {
      ...super.toApiFormat(),
      equipment_slot: this.equipmentSlot,
      durability: this.durability,
      attributes: this.attributes.map(attribute => attribute.toApiFormat())
    }
  }
}
