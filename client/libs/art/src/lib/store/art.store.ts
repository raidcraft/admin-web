import { ArtModel } from "../models";
import { State, Selector, Action, StateContext, NgxsOnInit } from "@ngxs/store";
import { ArtApiService } from "../services/art-api.service";
import { LoadArtModelsAction } from "./art.actions";
import { tap } from "rxjs/operators";

export interface ArtStateModel {
  entities: ArtModel[];
}

export const DEFAULT_ART_STATE: ArtStateModel = {
  entities: []
}

@State({
  name: 'art',
  defaults: DEFAULT_ART_STATE
})
export class ArtStore implements NgxsOnInit {

  @Selector()
  static artModels(state: ArtStateModel) {
    return state.entities.sort((a, b) => a > b ? -1 : 1);
  }

  constructor(private artApiService: ArtApiService) { }

  ngxsOnInit(ctx: StateContext<ArtStateModel>) {
    return ctx.dispatch(new LoadArtModelsAction());
  }

  @Action(LoadArtModelsAction)
  loadArtModels(ctx: StateContext<ArtStateModel>) {
    return this.artApiService.getAllArtModels().pipe(
      tap(models => ctx.setState({ entities: models }))
    );
  }
}
