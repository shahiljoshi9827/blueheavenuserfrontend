import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckeditdataComponent } from './checkeditdata.component';

describe('CheckeditdataComponent', () => {
  let component: CheckeditdataComponent;
  let fixture: ComponentFixture<CheckeditdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckeditdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckeditdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
