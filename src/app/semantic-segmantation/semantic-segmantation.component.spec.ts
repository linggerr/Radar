import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticSegmantationComponent } from './semantic-segmantation.component';

describe('SemanticSegmantationComponent', () => {
  let component: SemanticSegmantationComponent;
  let fixture: ComponentFixture<SemanticSegmantationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemanticSegmantationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemanticSegmantationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
