import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoBienSharedComponent } from './no-bien-shared.component';

describe('NoBienSharedComponent', () => {
  let component: NoBienSharedComponent;
  let fixture: ComponentFixture<NoBienSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoBienSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoBienSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
