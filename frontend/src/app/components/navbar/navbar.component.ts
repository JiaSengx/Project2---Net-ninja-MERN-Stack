import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Logout } from 'src/app/store/auth/auth-action';
import { AuthState } from 'src/app/store/auth/auth-state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Select(AuthState.getUser)
  user$!: Observable<any>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.store
      .dispatch(new Logout())
      .pipe(first())
      .subscribe((_: any) => {
        this.router.navigate(['/']);
      });
  }
}
