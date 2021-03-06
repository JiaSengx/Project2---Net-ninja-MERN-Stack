import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';

import { Observable } from 'rxjs';

import { WorkoutState } from '../../store/workout/workout-state';
import { GetWorkout } from '../../store/workout/workout-action';
import { WorkoutModel } from '../../store/workout/workout-model';
import {
  fadeInOut,
  fadeIn,
  fadeOut,
  slideDown,
  slideUp,
  slideFromRight,
  slideFromLeft,
} from '../../app.animation';
import { AuthState } from 'src/app/store/auth/auth-state';
import { first } from 'rxjs/operators';
import { AppState } from 'src/app/store/core/app-state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInOut,
    fadeIn,
    fadeOut,
    slideDown,
    slideUp,
    slideFromRight,
    slideFromLeft,
  ],
})
export class HomeComponent implements OnInit {
  title = 'workout';
  // workouts$: Observable<any> = of();
  // workouts2$: Observable<WorkoutModel[]> = of([]); // without using select to get data
  @Select(WorkoutState.getWorkouts)
  workouts2$!: Observable<WorkoutModel[]>;

  @Select(AppState.getIsLoading)
  isLoading$!: Observable<boolean>;

  constructor(private store: Store) {
    // this.workouts2$ = this.store.select((state) => state.workout.workouts); // without using select to get data
  }

  ngOnInit(): void {
    // this.workouts$ = this.workoutService.getAllWorkouts();
    // this.workoutService.onNewWorkoutSubject.subscribe((data: any) => {
    //   if (data) this.workouts$ = this.workoutService.getAllWorkouts();
    // });
    this.store
      .select(AuthState.getUser)
      .pipe(first())
      .subscribe((user: any) => {
        this.store.dispatch(new GetWorkout(user.email));
      });
  }
}
