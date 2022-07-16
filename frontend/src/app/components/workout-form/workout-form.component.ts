import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { WorkoutState } from 'src/app/store/workout/workout-state';
import { AddWorkout, ResetError } from '../../store/workout/workout-action';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss'],
})
export class WorkoutFormComponent implements OnInit {
  @Select(WorkoutState.getError)
  error$!: Observable<any>;

  // error: any = null;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSubmit(workoutForm: NgForm) {
    // const { title, reps, load }: WorkoutDTO = { ...workoutForm.value };
    // const workout: WorkoutDTO = { ...workoutForm.value };

    // this.workoutService.addWorkout(workout).subscribe(
    //   (workout) => {
    //     this.workoutService.onNewWorkoutSubject.next(true);
    //   },
    //   (err) => {
    //     this.error = err.error;
    //   }
    // );
    if (workoutForm.valid) {
      this.store.dispatch(new AddWorkout(workoutForm.value));
      this.store.dispatch(new ResetError());
      workoutForm.reset();
    }
  }
}
