import { Component, OnInit, Input, Host } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ControlContainer, FormGroupDirective } from '@angular/forms';
import { RCItem, ItemType, ItemQuality, ItemBindType } from '../../models';
import { ItemsService } from '../../services';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'rci-edit-item-general',
  templateUrl: './edit-item-general.component.html',
  styleUrls: ['./edit-item-general.component.scss']
})
export class EditItemGeneralComponent implements OnInit {

  @Input() parentForm: FormGroup;

  itemTypes = ItemType;
  qualities = ItemQuality;
  bindTypes = ItemBindType;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
    public items: ItemsService) {
  }

  ngOnInit() {
    this.parentForm.addControl('general', this.initForm());
    this.formGroup = this.parentForm.get('general') as FormGroup;
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('', Validators.required),
      minecraftItem: this.fb.control(null, Validators.required),
      quality: this.fb.control(ItemQuality.COMMON),
      bindType: this.fb.control(ItemBindType.NONE),
      itemType: this.fb.control(null, Validators.required)
    });
  }
}
