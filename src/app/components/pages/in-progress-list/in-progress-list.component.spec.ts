import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressListComponent } from './in-progress-list.component';

describe('InProgressListComponent', () => {
  let component: InProgressListComponent;
  let fixture: ComponentFixture<InProgressListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
