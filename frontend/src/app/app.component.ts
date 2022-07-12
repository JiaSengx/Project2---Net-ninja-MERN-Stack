import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'workout';
  // workouts$: Observable<any> = of();
  // workouts2$: Observable<WorkoutModel[]> = of([]); // without using select to get data
  // @Select(WorkoutState.getWorkouts)
  // workouts2$!: Observable<WorkoutModel[]>;

  // @Select(WorkoutState.getIsLoading)
  // isLoading$!: Observable<boolean>;

  constructor() {
    // this.workouts2$ = this.store.select((state) => state.workout.workouts); // without using select to get data
  }

  ngOnInit(): void {
    // this.workouts$ = this.workoutService.getAllWorkouts();
    // this.workoutService.onNewWorkoutSubject.subscribe((data: any) => {
    //   if (data) this.workouts$ = this.workoutService.getAllWorkouts();
    // });
    // this.store.dispatch(new GetWorkout());
  }
}
