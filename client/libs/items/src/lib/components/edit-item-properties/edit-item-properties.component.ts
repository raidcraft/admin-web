import { Component, OnInit, Input } from '@angular/core';
import { RCItem, ItemBindType, ItemQuality } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'rci-edit-item-properties',
  templateUrl: './edit-item-properties.component.html',
  styleUrls: ['./edit-item-properties.component.scss']
})
export class EditItemPropertiesComponent implements OnInit {

  @Input() parentForm: FormGroup;

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.parentForm.addControl('properties', this.initForm());
    this.formGroup = this.parentForm.get('properties') as FormGroup;
  }

  initForm(): FormGroup {
    return this.fb.group({
      sellPrice: this.fb.control(0),
      maxStackSize: this.fb.control(64),
      blockUsage: this.fb.control(false),
      lootable: this.fb.control(false),
      enchantmentEffect: this.fb.control(false),
      lore: this.fb.control(null),
      info: this.fb.control(null)
    })
  }

}
