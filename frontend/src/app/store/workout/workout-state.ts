import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';
import { tap } from 'rxjs/operators';

import { WorkoutService } from '../../services/workout/workout.service';
import { SetError, ToggleIsLoading } from '../core/app-action';
import {
  GetWorkout,
  AddWorkout,
  RemoveWorkout,
  UpdateWorkout,
} from './workout-action';
import { WorkoutModel } from './workout-model';

interface WorkoutStateModel {
  workouts: WorkoutModel[];
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
    { getState, patchState, dispatch }: StateContext<WorkoutStateModel>,
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
          dispatch(new SetError(err.error));
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
          ctx.dispatch(new SetError(err.error));
        }
      )
    );
  }

  @Action(RemoveWorkout)
  removeWorkout(
    { getState, patchState, dispatch }: StateContext<WorkoutStateModel>,
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
          dispatch(new SetError(err.error));
        }
      )
    );
  }
}
