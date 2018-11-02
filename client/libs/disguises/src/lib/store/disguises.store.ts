import { Disguise } from "../models";
import { State, Selector, Action, StateContext, NgxsOnInit } from "@ngxs/store";
import { tap } from "rxjs/operators";
import { LoadDisguisesAction, CreateDisguiseActionType, CreateDisguiseAction, UpdateDisguiseActionType, UpdateDisguiseAction, DeleteDisguiseActionType, DeleteDisguiseAction } from "./disguises.actions";
import { DisguisesApiService } from "../services/disguises-api.service";

export interface DisguisesStateModel {
  entities: Disguise[];
}

export const DEFAULT_DISGUISES_STATE: DisguisesStateModel = {
  entities: []
}

@State({
  name: 'disguises',
  defaults: DEFAULT_DISGUISES_STATE
})
export class DisguisesStore implements NgxsOnInit {

  @Selector()
  static disguises(state: DisguisesStateModel) {
    return state.entities;
  }

  constructor(private disguiseApiService: DisguisesApiService) { }

  ngxsOnInit(ctx: StateContext<DisguisesStateModel>) {
    return ctx.dispatch(new LoadDisguisesAction());
  }

  @Action(LoadDisguisesAction)
  loadDisguises(ctx: StateContext<DisguisesStateModel>) {
    return this.disguiseApiService.getAll().pipe(
      tap(models => ctx.setState({ entities: models }))
    );
  }

  @Action(CreateDisguiseAction)
  createDisguise(ctx: StateContext<DisguisesStateModel>, { payload }: typeof CreateDisguiseActionType) {
    return this.disguiseApiService.create(payload).pipe(
      tap(model => ctx.patchState({ entities: [...ctx.getState().entities, model] }))
    );
  }

  @Action(UpdateDisguiseAction)
  updateDisguise(ctx: StateContext<DisguisesStateModel>, { payload }: typeof UpdateDisguiseActionType) {
    return this.disguiseApiService.update(payload.id, payload).pipe(
      tap(model => {
        const state = ctx.getState();
        state.entities[state.entities.indexOf(model)] = model;
        ctx.patchState({ entities: state.entities });
      })
    );
  }

  @Action(DeleteDisguiseAction)
  deleteDisguise(ctx: StateContext<DisguisesStateModel>, { payload }: typeof DeleteDisguiseActionType) {
    return this.disguiseApiService.delete(payload).pipe(
      tap(model => {
        const models = ctx.getState().entities;
        models.splice(models.indexOf(model), 1);
        ctx.patchState({ entities: models });
      })
    );
  }
}
