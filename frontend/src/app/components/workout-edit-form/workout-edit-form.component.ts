import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { UpdateWorkout } from 'src/app/store/workout/workout-action';
import { WorkoutModel } from 'src/app/store/workout/workout-model';
import { WorkoutState } from 'src/app/store/workout/workout-state';
import { fadeIn } from '../../app.animation';

@Component({
  selector: 'app-workout-edit-form',
  templateUrl: './workout-edit-form.component.html',
  styleUrls: ['./workout-edit-form.component.scss'],
  animations: [fadeIn],
})
export class WorkoutEditFormComponent implements OnInit {
  entry: any;
  onEditWorkoutId: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.onEditWorkoutId = this.route.snapshot.params['workoutId'];
    this.entry = {
      ...this.store
        .selectSnapshot(WorkoutState.getWorkouts)
        .find((workout: WorkoutModel) => workout._id == this.onEditWorkoutId),
    };
  }

  onSubmit(workoutEditForm: NgForm) {
    const payload = { ...workoutEditForm.value };

    this.store.dispatch(new UpdateWorkout(this.onEditWorkoutId, payload));
    this.router.navigate(['/home']);
  }

  onCancelEdit() {
    this.router.navigate(['/home']);
  }
}
