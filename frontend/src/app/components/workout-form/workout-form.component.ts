import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { AuthState } from 'src/app/store/auth/auth-state';
import { AppState } from 'src/app/store/core/app-state';
import { WorkoutModel } from 'src/app/store/workout/workout-model';
import { ResetError } from '../../store/core/app-action';
import { AddWorkout } from '../../store/workout/workout-action';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss'],
})
export class WorkoutFormComponent implements OnInit {
  @Select(AppState.getError)
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
      this.store
        .select(AuthState.getUser)
        .pipe(first())
        .subscribe((user: any) => {
          const { email } = user;
          const workout: WorkoutModel = { email, ...workoutForm.value };

          this.store.dispatch(new AddWorkout(workout));
          this.store.dispatch(new ResetError());
        });
      workoutForm.reset();
    }
  }
}
