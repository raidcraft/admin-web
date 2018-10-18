import { Component, EventEmitter, OnInit, Output, Input, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ItemType, RCArmor, RCEquipment, RCItem, RCWeapon } from '../../models';
import { isNullOrUndefined } from 'util';
import { RCConsumeable } from '../../models/consumeable.model';

@Component({
  selector: 'rci-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {

  @Input() item: RCItem = null;
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

  get isConsumeable() {
    return this.itemType === ItemType.CONSUMEABLE;
  }

  constructor() { }

  saveItem() {
    this.save.emit(this.buildModel());
  }

  buildModel(): RCItem {
    const form = this.formGroup.value;
    const data = { id: isNullOrUndefined(this.item) ? null : this.item.id, ...form.general, ...form.properties };

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
      case ItemType.CONSUMEABLE:
        item = new RCConsumeable({ ...data, ...form.consumeable })
        break;
      default:
        item = new RCItem(data);
        break;
    }

    return item;
  }
}
