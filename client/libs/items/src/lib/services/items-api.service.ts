import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RCItem } from '../models';
import { RCITEM_MOCK_DATA } from '../models/item.mock-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsApiService {

  private readonly BASE_URL = '/api/items';
  private idCount = RCITEM_MOCK_DATA.length;

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<RCItem[]> {
    return this.http.get<any[]>(this.BASE_URL).pipe(
      map(data => data.map(json => new RCItem(json)))
    );
  }

  createItem(item: RCItem): Observable<RCItem> {
    return this.http.post(this.BASE_URL, item.toApiFormat()).pipe(
      map(data => new RCItem(data))
    );
  }
}
