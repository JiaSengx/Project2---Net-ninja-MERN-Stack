import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { WorkoutService } from '../services/workout.service';
import {
  GetWorkout,
  AddWorkout,
  RemoveWorkout,
  ResetError,
  ToggleIsLoading,
} from './workout-action';
import { WorkoutModel } from './workout-model';

interface WorkoutStateModel {
  workouts: WorkoutModel[];
  error: any;
  isLoading: boolean;
}

@State<WorkoutStateModel>({
  name: 'workout',
  defaults: {
    workouts: [],
    error: '',
    isLoading: false,
  },
})
@Injectable()
export class WorkoutState {
  constructor(private workoutService: WorkoutService) {}

  @Selector()
  static getWorkouts(state: WorkoutStateModel) {
    return state.workouts;
  }

  @Selector()
  static getError(state: WorkoutStateModel) {
    return state.error;
  }

  @Selector()
  static getIsLoading(state: WorkoutStateModel) {
    return state.isLoading;
  }

  @Action(GetWorkout)
  getWorkouts({
    getState,
    patchState,
    dispatch,
  }: StateContext<WorkoutStateModel>) {
    dispatch(new ToggleIsLoading());
    return this.workoutService.getAllWorkouts().pipe(
      tap((result: any) => {
        patchState({
          ...getState(),
          workouts: result,
        });
         dispatch(new ToggleIsLoading());
      })
    );
  }

  @Action(AddWorkout)
  addWorkout(
    { getState, patchState }: StateContext<WorkoutStateModel>,
    { payload }: AddWorkout
  ) {
    return this.workoutService.addWorkout(payload).pipe(
      tap(
        (result: any) => {
          patchState({
            workouts: [result, ...getState().workouts],
          });
        },
        (err: any) => {
          patchState({
            error: err.error,
          });
        }
      )
    );
  }

  @Action(RemoveWorkout)
  removeWorkout(
    { getState, patchState }: StateContext<WorkoutStateModel>,
    { payload }: RemoveWorkout
  ) {
    return this.workoutService.deleteWorkout(payload).pipe(
      tap(
        () => {
          patchState({
            workouts: getState().workouts.filter(
              (workout) => workout._id != payload
            ),
          });
        },
        (err: any) => {
          patchState({
            error: err.error.error,
          });
        }
      )
    );
  }

  @Action(ResetError)
  resetError({ patchState }: StateContext<WorkoutStateModel>) {
    patchState({
      error: null,
    });
  }

  @Action(ToggleIsLoading)
  toggleIsLoading({ getState, patchState }: StateContext<WorkoutStateModel>) {
    patchState({
      isLoading: !getState().isLoading,
    });
  }
}
