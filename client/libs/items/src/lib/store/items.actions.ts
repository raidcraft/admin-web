import { action, payload, union } from 'ts-action';
import { RCItem } from '../models';

export const LoadMinecraftItemsAction = action('[Items] Load Minecraft Items');
export const LoadRaidCraftItemsAction = action('[Items] Load RaidCraft Items');
export const CreateItemAction = action('[Items] Create', payload<RCItem>());
export const CreateItemActionType = union({ CreateItemAction });
