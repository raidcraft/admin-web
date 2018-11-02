import { Injectable } from '@angular/core';
import { DisguisesStore } from '../store/disguises.store';
import { Disguise } from '../models';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { UpdateDisguiseAction, CreateDisguiseAction, DeleteDisguiseAction } from '../store';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisguisesService {

  @Select(DisguisesStore.disguises)
  public models$: Observable<Disguise[]>;

  constructor(private store: Store) { }

  delete(id: number) {
    return this.store.dispatch(new DeleteDisguiseAction(id)).pipe(take(1));
  }

  create(model: Disguise) {
    return this.store.dispatch(new CreateDisguiseAction(model)).pipe(take(1));
  }

  update(model: Disguise) {
    return this.store.dispatch(new UpdateDisguiseAction(model)).pipe(take(1));
  }
}
