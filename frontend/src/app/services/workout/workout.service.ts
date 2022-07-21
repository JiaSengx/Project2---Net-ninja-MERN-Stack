import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { WorkoutDTO } from '../../models/workout-dto';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  url: string = `${environment.apiUrl}/api/workouts`;
  // onNewWorkoutSubject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getAllWorkouts(email: string) {
    return this.http.get(`${this.url}/${email}`);
  }

  addWorkout(workout: WorkoutDTO) {
    return this.http.post(`${this.url}`, workout);
  }

  updateWorkout(workoutId: string, workout: WorkoutDTO) {
    return this.http.patch(`${this.url}/${workoutId}`, workout);
  }

  deleteWorkout(workoutId: string) {
    return this.http.delete(`${this.url}/${workoutId}`);
  }
}
