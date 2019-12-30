import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [FormsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
