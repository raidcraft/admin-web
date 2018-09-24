import { RCEquipment } from "./equipment.model";
import { ArmorType } from "./items.model";

export class RCArmor extends RCEquipment {
  armorValue: number;
  armorType: ArmorType;

  constructor(data: any) {
    super(data);
    if (data) {
      this.armorType = data.armorType || data.armor_type;
      this.armorValue = data.armorValue || data.armor_value;
    }
  }

  toApiFormat(): any {
    return {
      ...super.toApiFormat(),
      armor_value: this.armorValue,
      armor_type: this.armorType
    }
  }

  toFormFormat(): any {
    return {
      ...super.toFormFormat(),
      armor: {
        armorValue: this.armorValue,
        armorType: this.armorType
      }
    };
  }
}
