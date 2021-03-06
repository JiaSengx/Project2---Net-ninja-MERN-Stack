import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { AuthService } from '../../services/auth/auth.service';
import { AuthModel } from './auth-model';
import { Login, Logout, Signup } from './auth-action';
import { ResetError, SetError } from '../core/app-action';

interface AuthStateModel {
  user: AuthModel | null;
  jwtToken: string | null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
    jwtToken: null,
  },
})
@Injectable()
export class AuthState {
  constructor(private authService: AuthService) {}

  @Selector()
  static getUser(state: AuthStateModel) {
    return state.user;
  }

  @Selector()
  static isAuthenticatedUser(state: AuthStateModel) {
    return !!state.jwtToken;
  }

  @Action(Signup)
  signup({ dispatch }: StateContext<AuthStateModel>, { payload }: Signup) {
    return this.authService.signup(payload).pipe(
      tap(
        (_: any) => {
          dispatch(new ResetError());
        },
        (err: any) => {
          dispatch(new SetError(err.error));
        }
      )
    );
  }

  @Action(Login)
  login(
    { patchState, dispatch }: StateContext<AuthStateModel>,
    { payload }: Login
  ) {
    return this.authService.login(payload).pipe(
      tap(
        ({ name, email, password, ...result }: any) => {
          const logedUser: AuthModel = {
            name,
            email,
            password,
          };
          patchState({
            user: logedUser,
            jwtToken: 'to be implement from backend',
          });
        },
        (err: any) => {
          dispatch(new SetError(err.error));
        }
      )
    );
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    ctx.patchState({
      user: null,
      jwtToken: null,
    });
  }

  private errorHandle(err: any) {
    // console.log(err.error);
    return throwError('Something bad happened; please try again later.');
  }
}
