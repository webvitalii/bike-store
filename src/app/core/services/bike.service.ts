import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BikeInterface } from '@app/core/interfaces/bike.interface';
import { environment } from '@env/environment';

export interface FirebaseCreateResponse {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  bikeTypes = [
    { key: 'road', value: 'Road Bike' },
    { key: 'mountain', value: 'Mountain Bike' },
    { key: 'hybrid', value: 'Hybrid Bike' },
    { key: 'cruiser', value: 'Cruiser Bike' },
    { key: 'electric', value: 'Electric Bike' },
  ];

  constructor(private http: HttpClient) {}

  create(post: BikeInterface): Observable<BikeInterface> {
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

  getAll(): Observable<BikeInterface[]> {
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

  getById(id: string): Observable<BikeInterface> {
    return this.http.get<BikeInterface>(`${environment.firebaseConfig.databaseURL}/bikes/${id}.json`).pipe(
      map((post: BikeInterface) => {
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

  update(post: BikeInterface): Observable<BikeInterface> {
    return this.http.patch<BikeInterface>(`${environment.firebaseConfig.databaseURL}/bikes/${post.id}.json`, post);
  }

  getBikeTypeName(type: string): string {
    const bikeType = this.bikeTypes.find((t) => t.key === type);
    return bikeType ? bikeType.value : 'Unknown';
  }

}
