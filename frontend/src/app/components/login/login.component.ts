import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ServiceEnum } from 'src/app/shared/enum/services-enum';
import { FacadeService } from 'src/app/shared/services/facade/facade.service';
import { Login } from 'src/app/store/auth/auth-action';
import { ResetError } from 'src/app/store/core/app-action';
import { AppState } from 'src/app/store/core/app-state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Select(AppState.getError)
  error$!: Observable<any>;

  constructor(
    private store: Store,
    private router: Router,
    private facadeSvc: FacadeService
  ) {}

  ngOnInit(): void {
    this.facadeSvc.logToConsole(ServiceEnum.WORKOUT);
  }

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      this.store
        .dispatch(new Login(loginForm.value))
        .pipe(first())
        .subscribe((_: any) => {
          this.store.dispatch(new ResetError());
          this.router.navigate(['home']);
        });
    }
  }
}
