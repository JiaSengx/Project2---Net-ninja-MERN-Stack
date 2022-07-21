import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { ResetError, SetError, ToggleIsLoading } from './app-action';

interface AppStateModel {
  error: any;
  isLoading: boolean;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    error: null,
    isLoading: false,
  },
})
@Injectable()
export class AppState {
  @Selector()
  static getError(state: AppStateModel) {
    return state.error;
  }

  @Selector()
  static getIsLoading(state: AppStateModel) {
    return state.isLoading;
  }

  @Action(SetError)
  setError(ctx: StateContext<AppStateModel>, { payload }: any) {
    ctx.patchState({
      error: payload,
    });
  }

  @Action(ResetError)
  resetError({ patchState }: StateContext<AppStateModel>) {
    patchState({
      error: null,
    });
  }

  @Action(ToggleIsLoading)
  toggleIsLoading({ getState, patchState }: StateContext<AppStateModel>) {
    patchState({
      isLoading: !getState().isLoading,
    });
  }
}
