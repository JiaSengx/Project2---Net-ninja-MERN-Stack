export class SetError {
  static readonly type = '[APP] SET ERROR';
  constructor(public payload: any) {}
}

export class ResetError {
  static readonly type = '[APP] RESET ERROR';
  constructor() {}
}

export class ToggleIsLoading {
  static readonly type = '[APP] TOGGLE IS LOADING';
  constructor() {}
}
