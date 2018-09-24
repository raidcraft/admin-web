import { ActionApi } from "models/actionapi.model";

export class ActionApiService {

  public getAll() {
    return ActionApi.all();
  }
}
