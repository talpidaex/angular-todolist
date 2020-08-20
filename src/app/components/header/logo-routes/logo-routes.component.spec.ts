import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoRoutesComponent } from './logo-routes.component';

describe('LogoRoutesComponent', () => {
  let component: LogoRoutesComponent;
  let fixture: ComponentFixture<LogoRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
