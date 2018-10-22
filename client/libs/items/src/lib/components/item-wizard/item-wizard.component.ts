import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemType, ItemQuality, ItemBindType, EquipmentSlot, WeaponType, ArmorType, RCItem, RCWeapon, RCArmor, RCEquipment } from '../../models';
import { ItemsService } from '../../services';
import { MatStepper } from '@angular/material';
import { EditItemGeneralComponent } from '../edit-item-general';
import { isNullOrUndefined } from 'util';
import { RCConsumeable } from '../../models/consumeable.model';
import { Router } from '@angular/router';

@Component({
  selector: 'rci-item-wizard',
  templateUrl: './item-wizard.component.html',
  styleUrls: ['./item-wizard.component.scss']
})
export class ItemWizardComponent implements OnInit {

  formGroup = new FormGroup({});

  @ViewChild("stepper") stepper: MatStepper;
  @ViewChild("general") general: EditItemGeneralComponent;

  get minLevel(): number {
    return this.formGroup.get('minLevel').value;
  }

  get attackSpeed(): number {
    return this.formGroup.get('attackSpeed').value;
  }

  get itemLevel(): number {
    return this.minLevel * 1 + 5 * 1;
  }

  get itemType() {
    const general = this.formGroup.get('general');
    const itemType = general && general.get('itemType');
    return itemType && ItemType[itemType.value];
  }

  get itemName() {
    return this.itemGeneralGroup.get('name').value;
  }

  get minecraftItem() {
    return this.itemGeneralGroup.get('minecraftItem').value;
  }

  get lore() {
    return this.propertiesGroup.get('lore').value;
  }

  get itemQuality(): ItemQuality {
    return this.itemGeneralGroup.get('quality').value;
  }

  get itemSlot(): EquipmentSlot {
    return this.itemGeneralGroup.get('equipmentSlot').value;
  }

  get armorType(): ArmorType {
    return this.itemGeneralGroup.get('armorType').value;
  }

  get itemGeneralGroup(): FormGroup {
    return this.formGroup.get('general') as FormGroup;
  }

  get attributesGroup(): FormGroup {
    return this.formGroup.get('attributes') as FormGroup;
  }

  get propertiesGroup(): FormGroup {
    return this.formGroup.get('properties') as FormGroup;
  }

  get budget(): number {
    return this.items.calculateItemBudget(this.itemLevel, this.itemQuality, this.itemSlot);
  }

  get durability(): number {
    return this.items.getDurability(this.itemLevel, this.itemQuality, this.itemSlot, this.armorType);
  }

  get armorValue(): number {
    return this.items.getArmorValue(this.itemLevel, this.itemQuality, this.itemSlot, this.armorType);
  }

  get damagePerSecond(): number {
    return this.items.getDamagePerSecond(this.itemLevel, this.itemQuality, this.itemSlot);
  }

  get minDamage(): number {
    const averageDamage = this.damagePerSecond * this.attackSpeed;
    return averageDamage - averageDamage / 5;
  }

  get maxDamage(): number {
    const averageDamage = this.damagePerSecond * this.attackSpeed;
    return averageDamage + averageDamage / 5;
  }

  itemTypes = ItemType;
  qualities = ItemQuality;
  bindTypes = ItemBindType;
  equipmentSlots = EquipmentSlot;
  weaponTypes = WeaponType;
  armorTypes = ArmorType;

  constructor(private fb: FormBuilder, private items: ItemsService, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      minLevel: this.fb.control(1, [Validators.required, Validators.min(0)]),
      itemLevel: this.fb.control({
        value: 6,
        disabled: true
      }),
      attackSpeed: this.fb.control(1),
      general: this.fb.group({}),
      attributes: this.fb.group({}),
      properties: this.fb.group({})
    });
  }

  createItem() {
    this.items.createItem(this.buildModel());
    this.router.navigateByUrl('/items');
  }

  buildModel(): RCItem {
    const form = this.formGroup.value;
    const data = {
      itemLevel: this.itemLevel,
      ...form.general,
      ...form.properties,
      durability: this.durability,
      armorValue: this.armorValue,
      attackSpeed: this.attackSpeed,
      minDamage: this.minDamage,
      maxDamage: this.maxDamage
    };

    let item: RCItem;

    switch (this.itemType) {
      case ItemType.WEAPON:
        item = new RCWeapon({ ...data, ...form.attributes });
        break;
      case ItemType.ARMOR:
        item = new RCArmor({ ...data, ...form.attributes });
        break;
      case ItemType.EQUIPMENT:
        item = new RCEquipment({ ...data, ...form.attributes });
        break;
      case ItemType.CONSUMEABLE:
        item = new RCConsumeable({ ...data, ...form.consumeable })
        break;
      default:
        item = new RCItem(data);
        break;
    }

    return item;
  }

  nextStep() {
    if (this.general.isEquipment) {
      this.stepper.next();
    } else {
      this.stepper.selectedIndex = 3;
    }
  }

  goBack() {
    if (this.general.isEquipment) {
      this.stepper.previous();
    } else {
      this.stepper.selectedIndex = 1;
    }
  }
}
