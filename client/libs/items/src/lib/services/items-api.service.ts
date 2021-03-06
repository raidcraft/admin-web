import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RCItem, RCEquipment, RCArmor, RCWeapon } from '../models';
import { RCITEM_MOCK_DATA } from '../models/items.mock-data';
import { map } from 'rxjs/operators';
import { RCConsumeable } from '../models/consumeable.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsApiService {

  private readonly BASE_URL = '/api/items';

  static createItem(data: any): RCItem {
    switch (data.itemType) {
      case "WEAPON":
        return new RCWeapon(data);
      case "ARMOR":
        return new RCArmor(data);
      case "EQUIPMENT":
        return new RCEquipment(data);
      case "CONSUMEABLE":
        return new RCConsumeable(data);
      default:
        return new RCItem(data);
    }
  }

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<RCItem[]> {
    return this.http.get<any[]>(this.BASE_URL).pipe(
      map(data => data.map(json => this.mapToItem(json)))
    );
  }

  createItem(item: RCItem): Observable<RCItem> {
    return this.http.post(this.BASE_URL, item.toApiFormat()).pipe(
      map(data => this.mapToItem(data))
    );
  }

  updateItem(item: RCItem): Observable<RCItem> {
    return this.http.post(`${this.BASE_URL}/${item.id}`, item.toApiFormat()).pipe(
      map(data => this.mapToItem(data))
    );
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/${id}`);
  }

  private mapToItem(data: any): RCItem {

    switch (data.item_type) {
      case 'EQUIPMENT':
        return new RCEquipment({ ...data.equipment, ...data });
      case 'ARMOR':
        return new RCArmor({ ...data.equipment, ...data.equipment.armor, ...data });
      case 'WEAPON':
        return new RCWeapon({ ...data.equipment, ...data.equipment.weapon, ...data });
      case 'CONSUMEABLE':
        return new RCConsumeable({ ...data.consumeable, ...data });
      default:
        return new RCItem(data);
    }
  }
}
