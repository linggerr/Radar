import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarInfoComponent } from './radar-info.component';

describe('RadarInfoComponent', () => {
  let component: RadarInfoComponent;
  let fixture: ComponentFixture<RadarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
