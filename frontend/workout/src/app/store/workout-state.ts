import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { take, tap } from 'rxjs/operators';

import { WorkoutDTO } from '../models/workout-dto';
import { WorkoutService } from '../services/workout.service';
import { GetWorkout, AddWorkout, RemoveWorkout } from './workout-action';
import { WorkoutModel } from './workout-model';

export class WorkoutStateModel {
  workouts!: WorkoutModel[];
}

@State<WorkoutStateModel>({
  name: 'workout',
  defaults: {
    workouts: [],
  },
})
@Injectable()
export class WorkoutState {
  constructor(private workoutService: WorkoutService) {}

  @Selector()
  static getWorkouts(state: WorkoutStateModel) {
    return state.workouts;
  }

  @Action(GetWorkout)
  getWorkouts({ getState, patchState }: StateContext<WorkoutStateModel>) {
    return this.workoutService.getAllWorkouts().pipe(
      tap((result: any) => {
        patchState({
          ...getState(),
          workouts: result,
        });
      })
    );
  }

  @Action(AddWorkout)
  addWorkout(
    { getState, patchState }: StateContext<WorkoutStateModel>,
    { payload }: AddWorkout
  ) {
    return this.workoutService.addWorkout(payload).pipe(
      tap((result: any) => {
        patchState({
          workouts: [result, ...getState().workouts],
        });
      })
    );
  }

  @Action(RemoveWorkout)
  removeWorkout(
    { getState, patchState }: StateContext<WorkoutStateModel>,
    { payload }: RemoveWorkout
  ) {
    return this.workoutService.deleteWorkout(payload).pipe(
      tap(() => {
        patchState({
          workouts: getState().workouts.filter(
            (workout) => workout._id != payload
          ),
        });
      })
    );
    // patchState({
    //   workouts: getState().workouts.filter((a) => a._id != payload),
    // });
  }
}
