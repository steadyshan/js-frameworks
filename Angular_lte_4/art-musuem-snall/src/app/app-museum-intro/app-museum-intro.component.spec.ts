import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMuseumIntroComponent } from './app-museum-intro.component';

describe('AppMuseumIntroComponent', () => {
  let component: AppMuseumIntroComponent;
  let fixture: ComponentFixture<AppMuseumIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMuseumIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMuseumIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
