import { Component, OnInit, Input } from '@angular/core';
import { RCItem, ItemBindType, ItemQuality } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'rci-edit-item-properties',
  templateUrl: './edit-item-properties.component.html',
  styleUrls: ['./edit-item-properties.component.scss']
})
export class EditItemPropertiesComponent implements OnInit {

  @Input() item: RCItem = null;
  @Input() parentForm: FormGroup;

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.parentForm.addControl('properties', this.initForm());
    this.formGroup = this.parentForm.get('properties') as FormGroup;
    if (!isNullOrUndefined(this.item)) {
      this.formGroup.patchValue({
        sellPrice: this.item.sellPrice,
        maxStackSize: this.item.maxStackSize,
        blockUsage: this.item.blockUsage,
        lootable: this.item.lootable,
        enchantmentEffect: this.item.enchantmentEffect,
        lore: this.item.lore,
        info: this.item.info
      });
    }
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
