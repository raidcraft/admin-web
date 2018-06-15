import { Component, OnInit, Input } from '@angular/core';
import { RCItem, ItemBindType, ItemQuality } from '../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'rci-edit-item-properties',
  templateUrl: './edit-item-properties.component.html',
  styleUrls: ['./edit-item-properties.component.scss']
})
export class EditItemPropertiesComponent implements OnInit {

  @Input() item: RCItem = new RCItem();
  @Input() formGroup: FormGroup;

  qualities = ItemQuality;
  bindTypes = ItemBindType;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formGroup || this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      quality: this.fb.control(this.item.quality || ItemQuality.COMMON),
      price: this.fb.control(this.item.sellPrice || 0),
      stackSize: this.fb.control(this.item.maxStackSize || 64),
      blockUsage: this.fb.control(this.item.blockUsage || false),
      lootable: this.fb.control(this.item.lootable || false),
      enchantmentEffect: this.fb.control(this.item.enchantmentEffect || false),
      bindType: this.fb.control(this.item.bindType || ItemBindType.NONE),
      lore: this.fb.control(this.item.lore || null)
    })
  }

}
