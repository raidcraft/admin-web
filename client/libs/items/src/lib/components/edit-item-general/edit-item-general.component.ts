import { Component, OnInit, Input, Host } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ControlContainer, FormGroupDirective, AbstractControl } from '@angular/forms';
import { RCItem, ItemType, ItemQuality, ItemBindType, keyFromValue, MinecraftItem } from '../../models';
import { ItemsService } from '../../services';
import { MatSelectChange } from '@angular/material';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { of } from 'rxjs';

@Component({
  selector: 'rci-edit-item-general',
  templateUrl: './edit-item-general.component.html',
  styleUrls: ['./edit-item-general.component.scss']
})
export class EditItemGeneralComponent implements OnInit {

  @Input() item: RCItem = null;
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
    if (!isNullOrUndefined(this.item)) {
      this.formGroup.patchValue({
        name: this.item.name,
        minecraftItem: this.item.minecraftItem,
        quality: this.item.quality,
        bindType: this.item.bindType,
        itemType: this.item.itemType
      });
    }
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
    return this.item.name === control.value ? of(null) : this.items.isExistingItem(control.value).pipe(
      map(res => res ? { nameTaken: true } : null)
    );
  }

  compareMinecraftItem(item1: MinecraftItem, item2: MinecraftItem): boolean {
    return item1.id === item2.id;
  }
}
