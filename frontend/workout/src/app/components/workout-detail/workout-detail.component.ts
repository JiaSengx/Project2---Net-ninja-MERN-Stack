import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-detail',
  templateUrl: './workout-detail.component.html',
  styleUrls: ['./workout-detail.component.scss'],
})
export class WorkoutDetailComponent implements OnInit {
  @Input('workout') workout: any;

  constructor() {}

  ngOnInit(): void {}
}
