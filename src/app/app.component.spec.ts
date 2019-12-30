import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule, HttpClientModule],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'ng-todolist'`, () => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('ng-todolist');
  // });

  // it('should render title', () => {
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('ng-todolist app is running!');
  // });
});
