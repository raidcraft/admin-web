import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RCItem } from '../models';
import { RCITEM_MOCK_DATA } from '../models/item.mock-data';

@Injectable({
  providedIn: 'root'
})
export class ItemsApiService {

  private readonly BASE_URL = '/api/items';

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<RCItem[]> {
    return of(RCITEM_MOCK_DATA);
  }
}
