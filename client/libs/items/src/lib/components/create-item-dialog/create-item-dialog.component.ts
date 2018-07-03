import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, ControlContainer, FormGroupDirective } from '@angular/forms';
import { ItemsService } from '../../services';
import { ItemType, RCWeapon, RCItem, RCArmor, RCEquipment } from '../../models';
import { EditItemPropertiesComponent } from '../edit-item-properties';
import { EditItemGeneralComponent } from '../edit-item-general';
import { EditItemAttributesComponent } from '../edit-item-attributes';

@Component({
  selector: 'rci-create-item-dialog',
  templateUrl: './create-item-dialog.component.html',
  styleUrls: ['./create-item-dialog.component.scss']
})
export class CreateItemDialogComponent implements OnInit {

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

  constructor(private dialogRef: MatDialogRef<CreateItemDialogComponent>, private items: ItemsService) { }

  ngOnInit() {
  }

  saveItem() {
    this.items.createItem(this.buildModel());
    this.dialogRef.close();
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
