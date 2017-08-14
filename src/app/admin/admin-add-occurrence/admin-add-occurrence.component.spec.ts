import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddOccurrenceComponent } from './admin-add-occurrence.component';

describe('AdminAddOccurrenceComponent', () => {
  let component: AdminAddOccurrenceComponent;
  let fixture: ComponentFixture<AdminAddOccurrenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddOccurrenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddOccurrenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
