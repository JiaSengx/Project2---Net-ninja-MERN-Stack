import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WorkoutDTO } from 'src/app/models/workout.model';
import { WorkoutService } from 'src/app/services/workout.service';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss'],
})
export class WorkoutFormComponent implements OnInit {
  error: any = null;

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {}

  onSubmit(workoutForm: NgForm) {
    const workout: WorkoutDTO = { ...workoutForm.value };
    this.workoutService.addWorkout(workout).subscribe(
      (workout) => {
        console.log(workout);
      },
      (err) => {
        this.error = err.error;
      }
    );
  }
}
