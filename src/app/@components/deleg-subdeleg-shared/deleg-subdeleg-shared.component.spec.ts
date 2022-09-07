import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelegSubdelegSharedComponent } from './deleg-subdeleg-shared.component';

describe('DelegSubdelegSharedComponent', () => {
  let component: DelegSubdelegSharedComponent;
  let fixture: ComponentFixture<DelegSubdelegSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelegSubdelegSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelegSubdelegSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
