import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemsService } from '../../services';
import { ItemType } from '../../models';
import { EditItemPropertiesComponent } from '../edit-item-properties';
import { EditItemGeneralComponent } from '../edit-item-general';

@Component({
  selector: 'rci-create-item-dialog',
  templateUrl: './create-item-dialog.component.html',
  styleUrls: ['./create-item-dialog.component.scss']
})
export class CreateItemDialogComponent implements OnInit {

  formGroup: FormGroup;

  @ViewChild("properties") itemProperties: EditItemPropertiesComponent;
  @ViewChild("general") itemGeneral: EditItemGeneralComponent;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateItemDialogComponent>
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      general: this.itemGeneral.initForm(),
      properties: this.itemProperties.initForm()
    });
  }

}
