import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArmorType, RCArmor } from '../../models';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'rci-edit-armor-properties',
  templateUrl: './edit-armor-properties.component.html',
  styleUrls: ['./edit-armor-properties.component.scss']
})
export class EditArmorPropertiesComponent implements OnInit {

  @Input() item: RCArmor = null;
  @Input() parentForm: FormGroup;

  armorTypes = ArmorType;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.parentForm.addControl('armor', this.initForm());
    this.formGroup = this.parentForm.get('armor') as FormGroup;
    if (!isNullOrUndefined(this.item)) {
      this.formGroup.patchValue({
        armorValue: this.item.armorValue
      });
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      armorValue: this.fb.control(0, Validators.min(1))
    });
  }
}
