import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { WorkoutService } from 'src/app/services/workout/workout.service';
import { ServiceEnum } from '../../enum/services-enum';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  constructor(
    private workoutService: WorkoutService,
    private authService: AuthService
  ) {}

  private facadeSvc(key: ServiceEnum) {
    return {
      // [ServiceEnum.AUTH]: this.authService,
      [ServiceEnum.WORKOUT]: this.workoutService,
    }[key];
  }

  logToConsole(key: ServiceEnum) {
    return this.facadeSvc(key).log();
  }

  getRecords(key: ServiceEnum, subApiUrl: string) {
    return this.facadeSvc(key).getRecords(subApiUrl);
  }
}
