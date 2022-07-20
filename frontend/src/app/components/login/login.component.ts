import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Login } from 'src/app/store/auth/auth-action';
import { AuthState } from 'src/app/store/auth/auth-state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Select(AuthState.getError)
  error$!: Observable<any>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      this.store
        .dispatch(new Login(loginForm.value))
        .pipe(first())
        .subscribe((_: any) => {
          this.router.navigate(['home']);
        });
    }
  }
}
