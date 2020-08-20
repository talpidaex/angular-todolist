import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTodoComponent } from './dynamic-todo.component';

describe('DynamicTodoComponent', () => {
  let component: DynamicTodoComponent;
  let fixture: ComponentFixture<DynamicTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
