import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './sign-up.component';

const signUpRoute: Routes = [{ path: '', component: SignUpComponent }];

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, RouterModule.forChild(signUpRoute), FormsModule],
})
export class SignUpRouteModule {}
