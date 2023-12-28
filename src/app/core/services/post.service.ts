import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostInterface } from '@core/interfaces/post.interface';
import { environment } from '@env/environment';

export interface FirebaseCreateResponse {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  create(post: PostInterface): Observable<PostInterface> {
    return this.http.post(`${environment.firebaseConfig.databaseURL}/bikes.json`, post).pipe(
      map((response: FirebaseCreateResponse) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date)
        };
      })
    );
  }

  getAll(): Observable<PostInterface[]> {
    return this.http.get(`${environment.firebaseConfig.databaseURL}/bikes.json`).pipe(
      map((response: { [key: string]: any }) => {
        return Object.keys(response).map((key) => ({
          ...response[key],
          id: key,
          date: new Date(response[key].date)
        }));
      })
    );
  }

  getById(id: string): Observable<PostInterface> {
    return this.http.get<PostInterface>(`${environment.firebaseConfig.databaseURL}/bikes/${id}.json`).pipe(
      map((post: PostInterface) => {
        return {
          ...post,
          id,
          date: new Date(post.date)
        };
      })
    );
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.firebaseConfig.databaseURL}/bikes/${id}.json`);
  }

  update(post: PostInterface): Observable<PostInterface> {
    return this.http.patch<PostInterface>(`${environment.firebaseConfig.databaseURL}/bikes/${post.id}.json`, post);
  }

}
