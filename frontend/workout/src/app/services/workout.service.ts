import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  url: string = `${environment.apiUrl}/api`;

  constructor(private http: HttpClient) {}

  getAllWorkouts() {
    return this.http.get(`${this.url}/workouts`);
  }
}
