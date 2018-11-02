import { Component, OnInit } from '@angular/core';
import { DisguisesService } from '../../services';
import { Disguise } from '../../models';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'faldoria-create-disguise',
  templateUrl: './create-disguise.component.html',
  styleUrls: ['./create-disguise.component.css']
})
export class CreateDisguiseComponent {

  constructor(private dialogRef: MatDialogRef<CreateDisguiseComponent>, private disguises: DisguisesService) { }

  onSave(item: Disguise) {
    this.disguises.create(item);
    this.dialogRef.close();
  }
}
