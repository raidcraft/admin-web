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
export class CreateItemDialogComponent {

  constructor(private dialogRef: MatDialogRef<CreateItemDialogComponent>, private items: ItemsService) { }

  onSave(item: RCItem) {
    this.items.createItem(item);
    this.dialogRef.close();
  }
}
