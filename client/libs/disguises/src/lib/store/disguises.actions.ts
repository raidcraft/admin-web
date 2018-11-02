import { action, payload, union } from 'ts-action';
import { Disguise } from '../models';

export const LoadDisguisesAction = action('[Disguises] Load');
export const CreateDisguiseAction = action('[Disguises] Create', payload<Disguise>());
export const CreateDisguiseActionType = union({ CreateDisguiseAction });
export const UpdateDisguiseAction = action('[Disguises] Update', payload<Disguise>());
export const UpdateDisguiseActionType = union({ UpdateDisguiseAction });
export const DeleteDisguiseAction = action('[Disguises] Delete', payload<number>());
export const DeleteDisguiseActionType = union({ DeleteDisguiseAction });
