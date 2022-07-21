import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorkoutDetailComponent } from './components/workout-detail/workout-detail.component';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';

import { WorkoutState } from './store/workout/workout-state';
import { DateAgoPipe } from './shared/pipe/date-ago.pipe';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthState } from './store/auth/auth-state';
import { AuthGuard } from './shared/guard/auth.guard';
import { WorkoutEditFormComponent } from './components/workout-edit-form/workout-edit-form.component';
import { AppState } from './store/core/app-state';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkoutDetailComponent,
    WorkoutFormComponent,
    DateAgoPipe,
    LoginComponent,
    HomeComponent,
    ErrorPageComponent,
    WorkoutEditFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([WorkoutState, AuthState, AppState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
