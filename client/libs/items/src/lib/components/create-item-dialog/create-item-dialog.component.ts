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
    const data = this.formGroup.value;
    let item: RCItem;

    switch (this.itemType) {
      case ItemType.WEAPON:
        const weapon = new RCWeapon(this.formGroup.value);
        item = { ...weapon, ...data.weapon, ...data.attributes, ...data.equipment };
        break;
      case ItemType.ARMOR:
        const armor = new RCArmor(this.formGroup.value);
        item = { ...armor, ...data.armor, ...data.attributes, ...data.equipment };
        break;
      case ItemType.EQUIPMENT:
        const equipment = new RCEquipment(this.formGroup.value);
        item = { ...equipment, ...data.equipment, ...data.attributes };
        break;
      default:
        item = new RCItem(this.formGroup.value);
        break;
    }

    item = { ...item, ...data.general, ...data.properties };

    return item;
  }
}
