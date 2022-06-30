import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { WorkoutDTO } from '../models/workout-dto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  url: string = `${environment.apiUrl}/api/workouts`;
  // onNewWorkoutSubject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getAllWorkouts() {
    return this.http.get(`${this.url}`);
  }

  addWorkout(workout: WorkoutDTO) {
    return this.http.post(`${this.url}`, workout);
  }

  deleteWorkout(workoutId: string) {
    return this.http.delete(`${this.url}/${workoutId}`);
  }
}
