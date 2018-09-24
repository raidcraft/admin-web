import { Injectable } from '@angular/core';
import { ArtModel } from '../models';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { ArtStore } from '../store/art.store';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  @Select(ArtStore.artModels)
  public models$: Observable<ArtModel[]>;

  constructor() { }
}
