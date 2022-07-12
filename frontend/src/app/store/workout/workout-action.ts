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

export class ResetError {
  static readonly type = '[WORKOUT] RESET ERROR';
  constructor() {}
}

export class ToggleIsLoading {
  static readonly type = '[WORKOUT] TOGGLE IS LOADING';
  constructor() {}
}
