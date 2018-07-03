import { Component, OnInit, Input, Host } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ControlContainer, FormGroupDirective, AbstractControl } from '@angular/forms';
import { RCItem, ItemType, ItemQuality, ItemBindType, keyFromValue } from '../../models';
import { ItemsService } from '../../services';
import { MatSelectChange } from '@angular/material';
import { map } from 'rxjs/operators';

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
      name: this.fb.control('', Validators.required, this.validateNameNotTaken.bind(this)),
      minecraftItem: this.fb.control(null, Validators.required),
      quality: this.fb.control("COMMON", Validators.required),
      bindType: this.fb.control("NONE", Validators.required),
      itemType: this.fb.control(null, Validators.required)
    });
  }

  validateNameNotTaken(control: AbstractControl) {
    return this.items.isExistingItem(control.value).pipe(
      map(res => res ? { nameTaken: true } : null)
    );
  }
}
