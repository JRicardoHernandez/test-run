import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoVolanteSharedComponent } from './no-volante-shared.component';

describe('NoVolanteSharedComponent', () => {
  let component: NoVolanteSharedComponent;
  let fixture: ComponentFixture<NoVolanteSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoVolanteSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoVolanteSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
