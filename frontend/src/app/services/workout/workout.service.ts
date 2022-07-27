import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { WorkoutDTO } from '../../models/workout-dto';
import { ApiBaseService } from 'src/app/shared/services/api-base/api-base.service';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService extends ApiBaseService {
  url: string = `${environment.apiUrl}/api/workouts`;
  // onNewWorkoutSubject = new Subject<any>();

  constructor(protected http: HttpClient) {
    super(http);
  }

  // getAllWorkouts(email: string) {
  //   return this.http.get(`${this.url}/${email}`);
  // }

  addWorkout(workout: WorkoutDTO) {
    return this.http.post(`${this.url}`, workout);
  }

  updateWorkout(workoutId: string, workout: WorkoutDTO) {
    return this.http.patch(`${this.url}/${workoutId}`, workout);
  }

  deleteWorkout(workoutId: string) {
    return this.http.delete(`${this.url}/${workoutId}`);
  }

  log() {
    console.log('Wokout facade work');
  }
}
