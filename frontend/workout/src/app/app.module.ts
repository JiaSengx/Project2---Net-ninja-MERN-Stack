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

import { WorkoutState } from './store/workout-state';
import { DateAgoPipe } from './shared/pipe/date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkoutDetailComponent,
    WorkoutFormComponent,
    DateAgoPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([WorkoutState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
