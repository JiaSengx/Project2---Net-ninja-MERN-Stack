import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutEditFormComponent } from './workout-edit-form.component';

describe('WorkoutEditFormComponent', () => {
  let component: WorkoutEditFormComponent;
  let fixture: ComponentFixture<WorkoutEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
