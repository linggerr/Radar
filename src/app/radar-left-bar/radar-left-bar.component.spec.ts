import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarLeftBarComponent } from './radar-left-bar.component';

describe('RadarLeftBarComponent', () => {
  let component: RadarLeftBarComponent;
  let fixture: ComponentFixture<RadarLeftBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadarLeftBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarLeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
