import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Disguise } from '../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisguisesApiService {

  private readonly BASE_URL = '/api/disguises';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Disguise[]> {
    return this.http.get<any[]>(this.BASE_URL).pipe(
      map(data => data.map(json => new Disguise(json)))
    );
  }

  create(model: Disguise): Observable<Disguise> {
    return this.http.post<any>(this.BASE_URL, model).pipe(
      map(data => new Disguise(data))
    );
  }

  delete(id: number): Observable<Disguise> {
    return this.http.delete<any>(`${this.BASE_URL}/${id}`).pipe(
      map(data => new Disguise(data))
    );
  }

  update(id: number, model: Disguise): Observable<Disguise> {
    return this.http.post<any>(`${this.BASE_URL}/${id}`, model).pipe(
      map(data => new Disguise(data))
    );
  }
}
