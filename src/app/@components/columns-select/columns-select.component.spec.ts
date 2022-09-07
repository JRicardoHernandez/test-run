import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnsSelectComponent } from './columns-select.component';

describe('ColumnsSelectComponent', () => {
  let component: ColumnsSelectComponent;
  let fixture: ComponentFixture<ColumnsSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnsSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnsSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
