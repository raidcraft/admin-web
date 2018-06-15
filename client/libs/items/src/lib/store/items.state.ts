import { State, StateContext, Action, Selector, NgxsOnInit } from "@ngxs/store";
import { RCItem, RCItemCategory, MinecraftItem } from "../models";
import { RCITEM_MOCK_DATA } from "../models/item.mock-data";
import { LoadMinecraftItemsAction, LoadRaidCraftItemsAction } from "./items.actions";
import { MinecraftDataService } from "../services/minecraft-data.service";
import { normalize, denormalize } from "normalizr";
import { raidcraftItemsListSchema, minecraftItemsListSchema } from "./items.normalizr";
import { map, tap } from "rxjs/operators";
import { ItemsApiService } from "../services/items-api.service";

export interface ItemsStateModel {
  entities: {
    items: { [id: number]: RCItem };
    categories: { [id: number]: RCItemCategory };
    minecraft_items: MinecraftItem[]
  }
}

export const DEFAULT_ITEM_STORE: ItemsStateModel = {
  entities: {
    items: {},
    categories: {},
    minecraft_items: []
  }
}

@State({
  name: 'items',
  defaults: DEFAULT_ITEM_STORE
})
export class ItemsState implements NgxsOnInit {

  @Selector()
  static minecraftItems(state: ItemsStateModel) {
    return denormalize(Object.keys(state.entities.minecraft_items), minecraftItemsListSchema, state.entities)
      .sort((a, b) => a.name > b.name ? 1 : -1);
  }

  @Selector()
  static raidcraftItems(state: ItemsStateModel) {
    return denormalize(Object.keys(state.entities.items), raidcraftItemsListSchema, state.entities);
  }

  constructor(private minecraftData: MinecraftDataService, private itemsApi: ItemsApiService) {}

  ngxsOnInit(ctx: StateContext<ItemsStateModel>) {

    return ctx.dispatch([
      new LoadMinecraftItemsAction(),
      new LoadRaidCraftItemsAction()
    ]);
  }

  @Action(LoadMinecraftItemsAction)
  loadMinecraftItems(ctx: StateContext<ItemsStateModel>) {
    return this.minecraftData.getMinecraftItems().pipe(
      map(items => normalize(items, minecraftItemsListSchema)),
      tap(result => this.updateEntitiesState(ctx, result.entities))
    );
  }

  @Action(LoadRaidCraftItemsAction)
  loadRaidCraftItems(ctx: StateContext<ItemsStateModel>) {
    return this.itemsApi.getAllItems().pipe(
      map(items => normalize(items, raidcraftItemsListSchema)),
      tap(result => this.updateEntitiesState(ctx, result.entities, 'minecraft_items'))
    );
  }

  updateEntitiesState(ctx: StateContext<ItemsStateModel>, entities: any, ...excludedKeys: string[]) {
    const state: ItemsStateModel = ctx.getState();

    Object.keys(state.entities).filter(key => !excludedKeys.includes(key)).forEach(key => {
      state.entities[key] = Object.assign({}, state.entities[key], entities[key]);
    });

    return ctx.patchState({ entities: { ...state.entities } });
  }
}

