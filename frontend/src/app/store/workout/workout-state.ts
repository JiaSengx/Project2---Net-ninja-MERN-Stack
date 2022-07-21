import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
import { tap } from 'rxjs/operators';

import { WorkoutService } from '../../services/workout/workout.service';
import {
  GetWorkout,
  AddWorkout,
  RemoveWorkout,
  ResetError,
  ToggleIsLoading,
  UpdateWorkout,
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
  getWorkouts(
    { getState, patchState, dispatch }: StateContext<WorkoutStateModel>,
    { payload }: GetWorkout
  ) {
    dispatch(new ToggleIsLoading());
    return this.workoutService.getAllWorkouts(payload).pipe(
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

  @Action(UpdateWorkout)
  updateWorkout(
    ctx: StateContext<WorkoutStateModel>,
    { workoutId, payload }: UpdateWorkout
  ) {
    return this.workoutService.updateWorkout(workoutId, payload).pipe(
      tap(
        (result: any) => {
          const updatedWorkout = {
            ...ctx
              .getState()
              .workouts.find((workout) => workout._id == workoutId),
            ...payload,
          };

          ctx.setState(
            patch({
              workouts: updateItem<WorkoutModel>(
                (workout) => workout?._id === workoutId,
                updatedWorkout
              ),
            })
          );
        },
        (err: any) => {
          ctx.patchState({
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
