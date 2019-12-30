import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('TodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [FormsModule, HttpClientModule],
    providers: [TodoService]
  }));

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });
});
