import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionLayoutComponent } from './question-layout.component';

describe('QuestionLayoutComponent', () => {
  let component: QuestionLayoutComponent;
  let fixture: ComponentFixture<QuestionLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
