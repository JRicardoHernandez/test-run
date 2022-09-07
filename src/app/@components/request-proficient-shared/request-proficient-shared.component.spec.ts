import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProficientSharedComponent } from './request-proficient-shared.component';

describe('RequestProficientSharedComponent', () => {
  let component: RequestProficientSharedComponent;
  let fixture: ComponentFixture<RequestProficientSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestProficientSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestProficientSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
