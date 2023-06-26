import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUpdateFormComponent } from './list-update-form.component';

describe('ListUpdateFormComponent', () => {
  let component: ListUpdateFormComponent;
  let fixture: ComponentFixture<ListUpdateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUpdateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
