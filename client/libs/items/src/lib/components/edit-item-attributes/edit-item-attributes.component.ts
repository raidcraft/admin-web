import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { RCAttribute, AttributeType, RCEquipment } from '../../models';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'rci-edit-item-attributes',
  templateUrl: './edit-item-attributes.component.html',
  styleUrls: ['./edit-item-attributes.component.scss']
})
export class EditItemAttributesComponent implements OnInit {

  @Input() item: RCEquipment = null;
  @Input() parentForm: FormGroup;

  attributeTypes = AttributeType;
  formGroup: FormGroup;
  formArray: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.parentForm.addControl('attributes', this.initForm());
    this.formGroup = this.parentForm.get('attributes') as FormGroup;

    if (!isNullOrUndefined(this.item)) {
      this.item.attributes.forEach(attribute => this.addAttribute(attribute));
    }
  }

  initForm(): FormGroup {
    const group = this.fb.group({
      attributes: this.fb.array([])
    });

    this.formArray = group.get('attributes') as FormArray;

    return group;
  }

  addAttribute(attribute?: RCAttribute) {
    this.formArray.push(this.createAttribute(attribute || new RCAttribute()));
  }

  removeAttribute(index: number) {
    this.formArray.removeAt(index);
  }

  createAttribute(attribute: RCAttribute): FormGroup {
    return this.fb.group({
      attributeName: this.fb.control(attribute.attribute || AttributeType.AGILITY, Validators.required),
      value: this.fb.control(attribute.value, Validators.min(1))
    });
  }
}
