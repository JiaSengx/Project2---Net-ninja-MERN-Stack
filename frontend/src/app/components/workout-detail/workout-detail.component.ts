import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { RemoveWorkout } from 'src/app/store/workout/workout-action';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.scss'],
})
export class WorkoutDetailComponent implements OnInit {
  @Input('workout') workout: any;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  onRemoveWorkout(workoutId: string) {
    this.store.dispatch(new RemoveWorkout(workoutId));
    // this.workoutService.deleteWorkout(workoutId).subscribe((data: any) => {
    //   this.workoutService.onNewWorkoutSubject.next(true);
    // });
  }
}
