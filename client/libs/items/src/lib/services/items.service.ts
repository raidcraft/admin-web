import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MinecraftItem, RCItem } from '../models';
import { Select, Store } from '@ngxs/store';
import { ItemsState } from '../store/items.state';
import { ItemsApiService } from './items-api.service';
import { map } from 'rxjs/operators';
import { CreateItemAction } from '../store/items.actions';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  @Select(ItemsState.minecraftItems)
  minecraftItems$: Observable<MinecraftItem[]>;

  @Select(ItemsState.raidcraftItems)
  items$: Observable<RCItem[]>;

  constructor(private store: Store) { }

  createItem(item: RCItem) {
    this.store.dispatch(new CreateItemAction(item));
  }
}
