import { action, payload, union } from 'ts-action';
import { RCItem } from '../models';

export const LoadMinecraftItemsAction = action('[Items] Load Minecraft Items');
export const LoadRaidCraftItemsAction = action('[Items] Load RaidCraft Items');
export const CreateItemAction = action('[Items] Create', payload<RCItem>());
export const CreateItemActionType = union({ CreateItemAction });
export const UpdateItemAction = action('[Items] Update', payload<RCItem>());
export const UpdateItemActionType = union({ UpdateItemAction });
export const DeleteItemAction = action('[Items] Delete', payload<number>());
export const DeleteItemActionType = union({ DeleteItemAction });

export const SetEditingItemAction = action('[Items] Set Editing Item', payload<number>());
export const SetEditingItemActionType = union({ SetEditingItemAction });
