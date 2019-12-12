import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightbartemplateComponent } from './rightbartemplate.component';

describe('RightbartemplateComponent', () => {
  let component: RightbartemplateComponent;
  let fixture: ComponentFixture<RightbartemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightbartemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightbartemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
