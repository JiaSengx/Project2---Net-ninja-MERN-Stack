import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorkoutDetailComponent } from './components/workout-detail/workout-detail.component';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkoutDetailComponent,
    WorkoutFormComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
