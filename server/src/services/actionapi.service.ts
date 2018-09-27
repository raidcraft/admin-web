import { ActionApi } from "models/actionapi.model";

export class ActionApiService {

  public getAll() {
    return ActionApi.findAll({ attributes: ['name', 'action_type', 'description', 'conf'], group: ['name', 'action_type'] });
  }
}
