import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoComponent } from './add-todo.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodoComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FormsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
