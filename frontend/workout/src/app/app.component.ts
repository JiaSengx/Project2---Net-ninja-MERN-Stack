import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WorkoutService } from './services/workout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'workout';
  workouts$: Observable<any> = of();

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workouts$ = this.workoutService.getAllWorkouts();
  }
}
