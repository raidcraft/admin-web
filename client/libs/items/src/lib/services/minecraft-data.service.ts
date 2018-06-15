import { Injectable } from '@angular/core';
import { MinecraftItem } from '../models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MinecraftDataService {

  private readonly BASE_URL = 'https://minecraft-ids.grahamedgecombe.com';

  constructor(private http: HttpClient) { }

  getMinecraftItems(): Observable<MinecraftItem[]> {
    return this.http.get<any[]>(`${this.BASE_URL}/items.json`).pipe(
      map(data =>  data.map(json => new MinecraftItem(json)))
    );
  }
}
