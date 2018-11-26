import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Tag } from "../models";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TagsApiService {

  private readonly BASE_URL = '/api/tags';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.BASE_URL);
  }

  createTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(this.BASE_URL, tag);
  }

  updateTag(tag: Tag): Observable<Tag> {
    return this.http.post<Tag>(`${this.BASE_URL}/${tag.id}`, tag);
  }

  deleteTag(tag: Tag): Observable<Tag> {
    return this.http.delete<Tag>(`${this.BASE_URL}/${tag.id}`);
  }
}
