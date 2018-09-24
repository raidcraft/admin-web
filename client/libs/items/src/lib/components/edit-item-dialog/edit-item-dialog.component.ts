import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ItemsService } from '../../services';
import { RCItem } from '../../models';

@Component({
  selector: 'rci-edit-item-dialog',
  templateUrl: './edit-item-dialog.component.html',
  styleUrls: ['./edit-item-dialog.component.scss']
})
export class EditItemDialogComponent {

  constructor(private dialogRef: MatDialogRef<EditItemDialogComponent>, public items: ItemsService) { }

  onSave(item: RCItem) {
    this.items.updateItem(item);
    this.dialogRef.close();
  }
}
