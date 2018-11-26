import { TagsStore, TagsState } from "../store/tags.store";
import { Tag } from "../models";
import { QueryEntity } from "@datorama/akita";
import { Injector, Injectable } from "@angular/core";
import { TagsApiService } from "./tags-api.service";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TagsService extends QueryEntity<TagsState, Tag> {

  tags$ = this.selectAll();

  constructor(protected store: TagsStore, private api: TagsApiService) {
    super(store);
  }

  create(tag: Tag) {
    this.api.createTag(tag).pipe(
      take(1)
    ).subscribe(result => {
      this.store.add(result);
    })
  }

  update(tag: Tag) {
    this.api.updateTag(tag).pipe(take(1)).subscribe(result => {
      this.store.update(tag.id, result);
    })
  }

  delete(tag: Tag) {
    this.api.deleteTag(tag).pipe(take(1)).subscribe(result => {
      this.store.remove(tag.id);
    });
  }

  load() {
    this.api.getAll().pipe(take(1)).subscribe(data => this.store.set(data));
  }
}
