import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemantisRightComponent } from './semantis-right.component';

describe('SemantisRightComponent', () => {
  let component: SemantisRightComponent;
  let fixture: ComponentFixture<SemantisRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemantisRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemantisRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
