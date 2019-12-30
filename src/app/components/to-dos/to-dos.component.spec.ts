import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { ToDosComponent } from './to-dos.component';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('ToDosComponent', () => {
  let component: ToDosComponent;
  let fixture: ComponentFixture<ToDosComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDosComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FormsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDosComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('constructor should remove last name from default value', () => {
    expect(component.name).toBe('James');
  });
});
