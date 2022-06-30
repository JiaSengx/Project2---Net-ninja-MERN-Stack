import { WorkoutModel } from './workout-model';

export class GetWorkout {
  static readonly type = '[WORKOUT] GET WORKOUT';
  constructor() {}
}

export class AddWorkout {
  static readonly type = '[WORKOUT] ADD WORKOUT';
  constructor(public payload: WorkoutModel) {}
}

export class RemoveWorkout {
  static readonly type = '[WORKOUT] REMOVE WORKOUT';
  constructor(public payload: string) {}
}
