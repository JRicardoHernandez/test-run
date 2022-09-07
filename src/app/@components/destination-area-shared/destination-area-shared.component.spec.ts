import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationAreaSharedComponent } from './destination-area-shared.component';

describe('DestinationAreaSharedComponent', () => {
  let component: DestinationAreaSharedComponent;
  let fixture: ComponentFixture<DestinationAreaSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationAreaSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationAreaSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
