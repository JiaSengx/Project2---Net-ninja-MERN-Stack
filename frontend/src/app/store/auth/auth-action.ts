import { AuthModel } from './auth-model';

export class Login {
  static readonly type = '[AUTH] LOGIN';
  constructor(public payload: AuthModel) {}
}

export class Logout {
  static readonly type = '[AUTH] LOGOUT';
  constructor() {}
}

export class Signup {
  static readonly type = '[AUTH] SIGNUP';
  constructor(public payload: AuthModel) {}
}
