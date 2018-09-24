import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ItemType, RCArmor, RCEquipment, RCItem, RCWeapon } from '../../models';

@Component({
  selector: 'rci-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {

  @Output() save = new EventEmitter<RCItem>();

  formGroup = new FormGroup({});

  itemTypes = ItemType;

  get itemType() {
    const general = this.formGroup.get('general');
    const itemType = general && general.get('itemType');
    return itemType && ItemType[itemType.value];
  }

  get isEquipment() {
    return this.itemType === ItemType.ARMOR
      || this.itemType === ItemType.EQUIPMENT
      || this.itemType === ItemType.WEAPON;
  }

  constructor() { }

  saveItem() {
    this.save.emit(this.buildModel());
  }

  buildModel(): RCItem {
    const form = this.formGroup.value;
    const data = { ...form.general, ...form.properties };

    let item: RCItem;

    switch (this.itemType) {
      case ItemType.WEAPON:
        item = new RCWeapon({ ...data, ...form.weapon, ...form.attributes, ...form.equipment });
        break;
      case ItemType.ARMOR:
        item = new RCArmor({ ...data, ...form.armor, ...form.attributes, ...form.equipment });
        break;
      case ItemType.EQUIPMENT:
        item = new RCEquipment({ ...data, ...form.attributes, ...form.equipment });
        break;
      default:
        item = new RCItem(data);
        break;
    }

    return item;
  }
}
