import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { RCAttribute, AttributeType } from '../../models';

@Component({
  selector: 'rci-edit-item-attributes',
  templateUrl: './edit-item-attributes.component.html',
  styleUrls: ['./edit-item-attributes.component.scss']
})
export class EditItemAttributesComponent implements OnInit {

  @Input() parentForm: FormGroup;

  attributeTypes = AttributeType;
  formGroup: FormGroup;
  formArray: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.parentForm.addControl('attributes', this.initForm());
    this.formGroup = this.parentForm.get('attributes') as FormGroup;
  }

  initForm(): FormGroup {
    const group = this.fb.group({
      attributes: this.fb.array([])
    });

    this.formArray = group.get('attributes') as FormArray;

    return group;
  }

  addAttribute() {
    this.formArray.push(this.createAttribute(new RCAttribute()));
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
