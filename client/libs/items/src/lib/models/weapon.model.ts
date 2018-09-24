import { RCEquipment } from "./equipment.model";
import { WeaponType } from "./items.model";

export class RCWeapon extends RCEquipment {
  swingTime: number;
  minDamage: number;
  maxDamage: number;
  weaponType: WeaponType;

  constructor(data: any) {
    super(data);
    if (data) {
      this.weaponType = data.weaponType || data.weapon_type;
      this.minDamage = data.minDamage || data.min_damage;
      this.maxDamage = data.maxDamage || data.max_damage;
      this.swingTime = data.swingTime || data.swing_time;
    }
  }

  toApiFormat(): any {
    return {
      ...super.toApiFormat(),
      swing_time: this.swingTime,
      min_damage: this.minDamage,
      max_damage: this.maxDamage,
      weapon_type: this.weaponType
    }
  }

  toFormFormat(): any {
    return {
      ...super.toFormFormat(),
      weapon: {
        swingTime: this.swingTime,
        minDamage: this.minDamage,
        maxDamage: this.maxDamage,
        weaponType: this.weaponType
      }
    }
  }
}
