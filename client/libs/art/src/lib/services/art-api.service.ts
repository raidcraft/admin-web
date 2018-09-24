import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtModel } from '../models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArtApiService {

  private readonly BASE_URL = '/api/art';

  constructor(private http: HttpClient) { }

  getAllArtModels(): Observable<ArtModel[]> {
    return this.http.get<any[]>(this.BASE_URL).pipe(
      map(data => data.map(json => new ArtModel(json)))
    );
  }
}
