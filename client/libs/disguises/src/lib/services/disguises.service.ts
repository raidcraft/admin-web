import { Injectable } from '@angular/core';
import { DisguisesStore } from '../store/disguises.store';
import { Disguise, MineSkin, Skin } from '../models';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { UpdateDisguiseAction, CreateDisguiseAction, DeleteDisguiseAction } from '../store';
import { take, map, switchMap, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisguisesService {

  @Select(DisguisesStore.disguises)
  public models$: Observable<Disguise[]>;

  constructor(private store: Store, private http: HttpClient) { }

  delete(id: number) {
    return this.store.dispatch(new DeleteDisguiseAction(id)).pipe(take(1));
  }

  create(model: Disguise) {
    return this.store.dispatch(new CreateDisguiseAction(model)).pipe(take(1));
  }

  update(model: Disguise) {
    return this.store.dispatch(new UpdateDisguiseAction(model)).pipe(take(1));
  }

  generateSkin(name: string): Observable<Skin> {
    return this.getPlayerUUID(name).pipe(
      switchMap(uuid => this.http.get(`https://api.mineskin.org/generate/user/${uuid}`).pipe(
        map(json => {
          return new Skin(json);
        })
      ))
    );
  }

  getPlayerUUID(name: string): Observable<string> {
    return this.http.get<any>(`https://api.mineskin.org/validate/user/${name}`).pipe(
      map(json => json.uuid)
    );
  }
}
