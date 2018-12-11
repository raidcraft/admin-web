import { Injectable } from "@angular/core";
import { QueryEntity } from "@datorama/akita";
import { DisguisesState } from ".";
import { Disguise } from "../models";
import { DisguisesStore } from "./disguises.store";


@Injectable({
  providedIn: 'root'
})
export class DisguisesQueryService extends QueryEntity<DisguisesState, Disguise> {

  constructor(protected store: DisguisesStore) {
    super(store);
  }
}
