import { Tag } from "../models";
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from "@angular/core";

export interface TagsState extends EntityState<Tag> { }

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: "tags" })
export class TagsStore extends EntityStore<TagsState, Tag> {

  constructor() {
    super();
  }
}
