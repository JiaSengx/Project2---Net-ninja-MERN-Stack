import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthDTO } from 'src/app/models/auth-dto';
import { Signup } from 'src/app/store/auth/auth-action';
import { ResetError } from 'src/app/store/core/app-action';
import { AppState } from 'src/app/store/core/app-state';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit, OnDestroy {
  @Select(AppState.getError)
  error$!: Observable<any>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.store.dispatch(new ResetError());
  }

  onSubmit(signupForm: NgForm) {
    if (signupForm.valid) {
      const [name] = signupForm.controls.email.value.split('@');
      const payload: AuthDTO = {
        name,
        ...signupForm.value,
      };
      this.store
        .dispatch(new Signup(payload))
        .pipe(first())
        .subscribe((_: any) => {
          this.router.navigate(['/']);
        });
    }
  }
}
