import { Component, OnInit, Input } from '@angular/core';
import { EquipmentSlot, RCEquipment } from '../../models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'rci-edit-equipment-properties',
  templateUrl: './edit-equipment-properties.component.html',
  styleUrls: ['./edit-equipment-properties.component.scss']
})
export class EditEquipmentPropertiesComponent implements OnInit {

  @Input() item: RCEquipment = null;
  @Input() parentForm: FormGroup;

  equipmentSlots = EquipmentSlot;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.parentForm.addControl('equipment', this.initForm());
    this.formGroup = this.parentForm.get('equipment') as FormGroup;
    if (!isNullOrUndefined(this.item)) {
      this.formGroup.patchValue({
        equipmentSlot: this.item.equipmentSlot,
        durability: this.item.durability
      })
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      equipmentSlot: this.fb.control(null, Validators.required),
      durability: this.fb.control(0, Validators.min(1))
    });
  }
}
