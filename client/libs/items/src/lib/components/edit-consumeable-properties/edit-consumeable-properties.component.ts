import { Component, OnInit, Input } from '@angular/core';
import { EquipmentSlot, RCEquipment, ConsumeableType, AttributeType } from '../../models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { RCConsumeable } from '../../models/consumeable.model';

@Component({
  selector: 'rci-edit-consumeable-properties',
  templateUrl: './edit-consumeable-properties.component.html',
  styleUrls: ['./edit-consumeable-properties.component.scss']
})
export class EditConsumeablePropertiesComponent implements OnInit {

  @Input() item: RCConsumeable = null;
  @Input() parentForm: FormGroup;

  attributeTypes = AttributeType;
  consumeableTypes = ConsumeableType;
  formGroup: FormGroup;

  get consumeableType() {
    const type = this.formGroup.get('type').value;
    return type && ConsumeableType[type];
  }

  get isHealth() {
    return this.consumeableType === ConsumeableType.HEALTH;
  }

  get isAttribute() {
    return this.consumeableType === ConsumeableType.ATTRIBUTE;
  }

  get isInstant() {
    return this.formGroup.get('instant').value;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.parentForm.addControl('consumeable', this.initForm());
    this.formGroup = this.parentForm.get('consumeable') as FormGroup;
    if (!isNullOrUndefined(this.item)) {
      this.formGroup.patchValue({
        type: this.item.type,
        resourceGain: this.item.resourceGain,
        resourceName: this.item.resourceName,
        percentage: this.item.percentage,
        interval: this.item.interval,
        duration: this.item.duration,
        instant: this.item.instant
      })
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      type: this.fb.control('HEALTH', Validators.required),
      resourceGain: this.fb.control(0, Validators.required),
      resourceName: this.fb.control(null),
      percentage: this.fb.control(false),
      interval: this.fb.control(null),
      duration: this.fb.control(null),
      instant: this.fb.control(false)
    });
  }
}
