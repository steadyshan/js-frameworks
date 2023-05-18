import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaSummaryPageComponent } from './area-summary-page.component';

describe('AppMuseumIntroComponent', () => {
  let component: AreaSummaryPageComponent;
  let fixture: ComponentFixture<AreaSummaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaSummaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
