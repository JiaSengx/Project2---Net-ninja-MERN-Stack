import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';

import { Observable, of } from 'rxjs';

import { WorkoutService } from './services/workout.service';
import { WorkoutState } from './store/workout-state';
import { GetWorkout } from './store/workout-action';
import { WorkoutModel } from './store/workout-model';
import {
  fadeInOut,
  fadeIn,
  fadeOut,
  slideDown,
  slideUp,
  slideFromRight,
  slideFromLeft,
} from './app.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent implements OnInit {
  title = 'workout';
  // workouts$: Observable<any> = of();
  // workouts2$: Observable<WorkoutModel[]> = of([]); // without using select to get data
  @Select(WorkoutState.getWorkouts)
  workouts2$!: Observable<WorkoutModel[]>;

  constructor(private store: Store) {
    // this.workouts2$ = this.store.select((state) => state.workout.workouts); // without using select to get data
  }

  ngOnInit(): void {
    // this.workouts$ = this.workoutService.getAllWorkouts();
    // this.workoutService.onNewWorkoutSubject.subscribe((data: any) => {
    //   if (data) this.workouts$ = this.workoutService.getAllWorkouts();
    // });

    this.store.dispatch(new GetWorkout());
  }
}
