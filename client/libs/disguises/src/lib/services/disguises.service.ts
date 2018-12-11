import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { Disguise, Skin } from '../models';
import { DisguisesQueryService, DisguisesStore } from '../store';
import { DisguisesApiService } from './disguises-api.service';

@Injectable({
  providedIn: 'root'
})
export class DisguisesService {

  public disguises$ = this.query.selectAll();

  constructor(private store: DisguisesStore,
    private http: HttpClient,
    private api: DisguisesApiService,
    private query: DisguisesQueryService) { }

  delete(id: number) {
    this.api.delete(id).subscribe(result => {
      this.store.remove(result.id)
    });
  }

  create(model: Disguise) {
    this.api.create(model).subscribe(result => {
      this.store.add(result)
    });
  }

  update(model: Disguise) {
    this.api.update(model.id, model).subscribe(result => {
      this.store.update(result.id, result)
    });
  }

  getDisguise(id: number) {
    return this.query.selectEntity(id);
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

  load() {
    this.api.getAll().pipe(take(1)).subscribe(data => this.store.set(data));
  }
}
