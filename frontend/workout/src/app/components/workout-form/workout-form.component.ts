import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngxs/store';

import { WorkoutDTO } from 'src/app/models/workout-dto';
import { WorkoutService } from 'src/app/services/workout.service';
import { AddWorkout } from '../../store/workout-action';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss'],
})
export class WorkoutFormComponent implements OnInit {
  error: any = null;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSubmit(workoutForm: NgForm) {
    // const { title, reps, load }: WorkoutDTO = { ...workoutForm.value };
    // const workout: WorkoutDTO = { ...workoutForm.value };
    this.store.dispatch(new AddWorkout(workoutForm.value));

    // this.workoutService.addWorkout(workout).subscribe(
    //   (workout) => {
    //     this.workoutService.onNewWorkoutSubject.next(true);
    //   },
    //   (err) => {
    //     this.error = err.error;
    //   }
    // );
    workoutForm.reset();
  }
}
