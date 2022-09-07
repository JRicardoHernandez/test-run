import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateCoordinationSharedComponent } from './state-coordination-shared.component';

describe('StateCoordinationSharedComponent', () => {
  let component: StateCoordinationSharedComponent;
  let fixture: ComponentFixture<StateCoordinationSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateCoordinationSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateCoordinationSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
