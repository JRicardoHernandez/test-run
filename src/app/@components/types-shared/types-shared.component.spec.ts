import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesSharedComponent } from './types-shared.component';

describe('TypesSharedComponent', () => {
  let component: TypesSharedComponent;
  let fixture: ComponentFixture<TypesSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
