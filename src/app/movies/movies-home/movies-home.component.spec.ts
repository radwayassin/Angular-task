import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesHomeComponent } from './movies-home.component';

describe('MoviesComponent', () => {
  let component: MoviesHomeComponent;
  let fixture: ComponentFixture<MoviesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
