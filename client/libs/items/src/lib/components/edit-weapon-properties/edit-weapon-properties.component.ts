import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WeaponType, RCWeapon } from '../../models';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'rci-edit-weapon-properties',
  templateUrl: './edit-weapon-properties.component.html',
  styleUrls: ['./edit-weapon-properties.component.scss']
})
export class EditWeaponPropertiesComponent implements OnInit {

  @Input() item: RCWeapon = null;
  @Input() parentForm: FormGroup;

  weaponTypes = WeaponType;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.parentForm.addControl('weapon', this.initForm());
    this.formGroup = this.parentForm.get('weapon') as FormGroup;
    if (!isNullOrUndefined(this.item)) {
      this.formGroup.patchValue(this.item.toFormFormat().weapon);
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      minDamage: this.fb.control(0, Validators.min(1)),
      maxDamage: this.fb.control(0, Validators.min(1)),
      swingTime: this.fb.control(1.0, Validators.required)
    });
  }
}
