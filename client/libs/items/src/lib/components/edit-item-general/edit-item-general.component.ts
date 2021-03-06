import { Component, OnInit, Input, Host } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ControlContainer, FormGroupDirective, AbstractControl } from '@angular/forms';
import { RCItem, ItemType, ItemQuality, ItemBindType, keyFromValue, MinecraftItem, ArmorType, WeaponType, EquipmentSlot, RCEquipment, RCArmor, RCWeapon } from '../../models';
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
  equipmentSlots = EquipmentSlot;
  armorTypes = ArmorType;
  weaponTypes = WeaponType;

  formGroup: FormGroup;

  get itemQuality() {
    return this.formGroup.get('quality').value;
  }

  get itemType() {
    const itemType = this.formGroup.get('itemType');
    return itemType && ItemType[itemType.value];
  }

  get bindType() {
    return this.formGroup.get('bindType').value;
  }

  get isEquipment(): boolean {
    return this.itemType === ItemType.ARMOR
      || this.itemType === ItemType.EQUIPMENT
      || this.itemType === ItemType.WEAPON;
  }

  get isArmor(): boolean {
    return this.itemType === ItemType.ARMOR;
  }

  get isWeapon(): boolean {
    return this.itemType === ItemType.WEAPON;
  }

  get isConsumeable(): boolean {
    return this.itemType === ItemType.CONSUMEABLE;
  }

  get weaponType() {
    return this.formGroup.get('weaponType').value;
  }

  get armorType() {
    return this.formGroup.get('armorType').value;
  }

  get equipmentSlot() {
    return this.formGroup.get('equipmentSlot').value;
  }

  constructor(private fb: FormBuilder,
    public items: ItemsService) {
  }

  ngOnInit() {
    this.parentForm.setControl('general', this.initForm());
    this.formGroup = this.parentForm.get('general') as FormGroup;
    if (!isNullOrUndefined(this.item)) {
      this.formGroup.patchValue({
        name: this.item.name,
        minecraftItem: this.item.minecraftItem,
        quality: this.item.quality,
        bindType: this.item.bindType,
        itemType: this.item.itemType,
        equipmentSlot: this.isEquipment ? (this.item as RCEquipment).equipmentSlot : null,
        armorType: this.isArmor ? (this.item as RCArmor).armorType : null,
        weaponType: this.isWeapon ? (this.item as RCWeapon).weaponType : null
      });
    }
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control('', Validators.required, this.validateNameNotTaken.bind(this)),
      minecraftItem: this.fb.control(null, Validators.pattern('[a-zA-Z:_]+')),
      quality: this.fb.control("COMMON", Validators.required),
      bindType: this.fb.control("NONE", Validators.required),
      itemType: this.fb.control(null, Validators.required),
      equipmentSlot: this.fb.control(null),
      armorType: this.fb.control(null),
      weaponType: this.fb.control(null)
    });
  }

  validateNameNotTaken(control: AbstractControl) {
    return !isNullOrUndefined(this.item) && this.item.name === control.value ? of(null) : this.items.isExistingItem(control.value).pipe(
      map(res => res ? { nameTaken: true } : null)
    );
  }

  compareMinecraftItem(item1: MinecraftItem, item2: MinecraftItem): boolean {
    return item1.id === item2.id;
  }
}
