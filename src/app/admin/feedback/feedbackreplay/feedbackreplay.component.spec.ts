import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackreplayComponent } from './feedbackreplay.component';

describe('FeedbackreplayComponent', () => {
  let component: FeedbackreplayComponent;
  let fixture: ComponentFixture<FeedbackreplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackreplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackreplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
