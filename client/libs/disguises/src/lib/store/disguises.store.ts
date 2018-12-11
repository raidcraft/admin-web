import { Disguise } from "../models";
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from "@angular/core";
import { DisguisesApiService } from "../services";

export interface DisguisesState extends EntityState<Disguise> { }

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: "disguises" })
export class DisguisesStore extends EntityStore<DisguisesState, Disguise> {

  constructor(private api: DisguisesApiService) {
    super();
  }
}
