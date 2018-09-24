import { State, StateContext, Action, Selector, NgxsOnInit } from "@ngxs/store";
import { RCItem, RCItemCategory, MinecraftItem } from "../models";
import { RCITEM_MOCK_DATA } from "../models/items.mock-data";
import { LoadMinecraftItemsAction, LoadRaidCraftItemsAction, CreateItemActionType, CreateItemAction, DeleteItemActionType, UpdateItemAction, UpdateItemActionType, DeleteItemAction, SetEditingItemAction, SetEditingItemActionType } from "./items.actions";
import { MinecraftDataService } from "../services/minecraft-data.service";
import { normalize, denormalize } from "normalizr";
import { raidcraftItemsListSchema, minecraftItemsListSchema, raidCraftItemSchema } from "./items.normalizr";
import { map, tap } from "rxjs/operators";
import { ItemsApiService } from "../services/items-api.service";
import { isNullOrUndefined } from "util";

export interface ItemsStateModel {
  entities: {
    items: { [id: number]: RCItem };
    categories: { [id: number]: RCItemCategory };
    minecraft_items: MinecraftItem[]
  },
  editedItemId: number | null;
}

export const DEFAULT_ITEM_STORE: ItemsStateModel = {
  entities: {
    items: {},
    categories: {},
    minecraft_items: []
  },
  editedItemId: null
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

  @Selector()
  static editingItem(state: ItemsStateModel) {
    if (isNullOrUndefined(state.editedItemId)) {
      return null;
    }
    return ItemsApiService.createItem(denormalize(state.editedItemId, raidCraftItemSchema, state.entities));
  }

  constructor(private minecraftData: MinecraftDataService, private itemsApi: ItemsApiService) { }

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

  @Action(CreateItemAction)
  createItem(ctx: StateContext<ItemsStateModel>, { payload }: typeof CreateItemActionType) {
    return this.itemsApi.createItem(payload).pipe(
      map(item => normalize(item, raidCraftItemSchema)),
      tap(result => this.updateEntitiesState(ctx, result.entities, 'minecraft_items'))
    );
  }

  @Action(UpdateItemAction)
  updateItem(ctx: StateContext<ItemsStateModel>, { payload }: typeof UpdateItemActionType) {
    return this.itemsApi.updateItem(payload).pipe(
      map(item => normalize(item, raidCraftItemSchema)),
      tap(result => this.updateEntitiesState(ctx, result.entities, 'minecraft_items'))
    );
  }

  @Action(DeleteItemAction)
  deleteItem(ctx: StateContext<ItemsStateModel>, { payload }: typeof DeleteItemActionType) {
    return this.itemsApi.deleteItem(payload).pipe(
      tap(result => {
        const state = ctx.getState();
        delete state.entities.items[payload];
        ctx.setState(state);
      })
    );
  }

  @Action(SetEditingItemAction)
  setEditingItem(ctx: StateContext<ItemsStateModel>, { payload }: typeof SetEditingItemActionType) {
    return ctx.patchState({ editedItemId: payload });
  }

  updateEntitiesState(ctx: StateContext<ItemsStateModel>, entities: any, ...excludedKeys: string[]) {
    const state: ItemsStateModel = ctx.getState();

    Object.keys(state.entities).filter(key => !excludedKeys.includes(key)).forEach(key => {
      state.entities[key] = Object.assign({}, state.entities[key], entities[key]);
    });

    return ctx.patchState({ entities: { ...state.entities } });
  }
}

