import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscDesignSpecsComponent } from './misc-design-specs.component';

describe('MiscDesignSpecsComponent', () => {
  let component: MiscDesignSpecsComponent;
  let fixture: ComponentFixture<MiscDesignSpecsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscDesignSpecsComponent]
    });
    fixture = TestBed.createComponent(MiscDesignSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
