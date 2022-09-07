import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileNumberSharedComponent } from './file-number-shared.component';

describe('FileNumberSharedComponent', () => {
  let component: FileNumberSharedComponent;
  let fixture: ComponentFixture<FileNumberSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileNumberSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileNumberSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
