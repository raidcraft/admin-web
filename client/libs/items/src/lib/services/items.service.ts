import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MinecraftItem, RCItem, ItemType, RCWeapon, RCArmor, RCEquipment } from '../models';
import { Select, Store } from '@ngxs/store';
import { ItemsState, ItemsStateModel } from '../store/items.state';
import { ItemsApiService } from './items-api.service';
import { map, filter } from 'rxjs/operators';
import { CreateItemAction, DeleteItemAction, UpdateItemAction, SetEditingItemAction } from '../store/items.actions';

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

  static createItem(data: any): RCItem {
    switch (data.itemType) {
      case "WEAPON":
        return new RCWeapon(data);
      case "ARMOR":
        return new RCArmor(data);
      case "EQUIPMENT":
        return new RCEquipment(data);
      default:
        return new RCItem(data);
    }
  }

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

  public isExistingItem(name: string): Observable<boolean> {
    return this.store.selectOnce(ItemsState.raidcraftItems).pipe(
      filter<RCItem[]>(items => items.find(item => item.name === name) != null),
      map(result => result.length > 0)
    );
  }

  public deleteItem(id: number) {
    this.store.dispatch(new DeleteItemAction(id));
  }
}
