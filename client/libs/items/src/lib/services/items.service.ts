import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MinecraftItem, RCItem, ItemType, RCWeapon, RCArmor, RCEquipment, ItemQuality, EquipmentSlot, getItemQualityBudgetMultiplier, getItemQualityBudgetModifier, getItemLevelSlotModifier, ArmorType, getItemQualityDPSMultiplier, getDpsSlotModifier, getArmorValue, getItemQualityArmorModifier, getArmorSlotModifier, getDurabilitySlotModifier, getArmorDurabilityModifier, getItemQualityDurabilityModifier } from '../models';
import { Select, Store } from '@ngxs/store';
import { ItemsState, ItemsStateModel } from '../store/items.state';
import { map, filter } from 'rxjs/operators';
import { CreateItemAction, DeleteItemAction, UpdateItemAction, SetEditingItemAction } from '../store/items.actions';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  @Select(ItemsState.minecraftItems)
  minecraftItems$: Observable<MinecraftItem[]>;

  @Select(ItemsState.raidcraftItems)
  items$: Observable<RCItem[]>;

  @Select(ItemsState.editingItem)
  editingItem$: Observable<RCItem>;

  constructor(private store: Store) { }

  createItem(item: RCItem) {
    this.store.dispatch(new CreateItemAction(item));
  }

  updateItem(item: RCItem) {
    this.store.dispatch(new UpdateItemAction(item));
  }

  editItem(id: number): Observable<void> {
    return this.store.dispatch(new SetEditingItemAction(id));
  }

  isExistingItem(name: string): Observable<boolean> {
    return this.store.selectOnce(ItemsState.raidcraftItems).pipe(
      filter<RCItem[]>(items => items.find(item => item.name === name) != null),
      map(result => result.length > 0)
    );
  }

  deleteItem(id: number) {
    this.store.dispatch(new DeleteItemAction(id));
  }

  calculateItemBudget(itemLevel: number, quality: ItemQuality, slot: EquipmentSlot): number {
    const baseBudget = itemLevel * getItemQualityBudgetMultiplier(quality) + getItemQualityBudgetModifier(quality);
    return Math.ceil(baseBudget * getItemLevelSlotModifier(slot));
  }

  getDamagePerSecond(itemLevel: number, itemQuality: ItemQuality, itemSlot: EquipmentSlot): number {
    return ((itemLevel - 45) * 0.6 + 26.6) * getItemQualityDPSMultiplier(itemQuality) * getDpsSlotModifier(itemSlot);
  }

  getArmorValue(itemLevel: number, itemQuality: ItemQuality, itemSlot: EquipmentSlot, armorType: ArmorType): number {
    return getArmorValue(itemLevel, armorType) * getItemQualityArmorModifier(itemQuality, armorType) * getArmorSlotModifier(itemSlot);
  }

  getDurability(itemLevel: number, itemQuality: ItemQuality, itemSlot: EquipmentSlot, armorType: ArmorType): number {
    if (isNullOrUndefined(armorType)) {
      return 5 * Math.round(17 * getItemQualityDurabilityModifier(itemQuality) * getDurabilitySlotModifier(itemSlot));
    } else {
      return 5 * Math.round(23 * getDurabilitySlotModifier(itemSlot) * getArmorDurabilityModifier(armorType) * getItemQualityDurabilityModifier(itemQuality));
    }
  }
}
