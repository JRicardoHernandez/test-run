import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsTypesFormComponent } from './goods-types-form.component';

describe('GoodsTypesFormComponent', () => {
  let component: GoodsTypesFormComponent;
  let fixture: ComponentFixture<GoodsTypesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsTypesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsTypesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
