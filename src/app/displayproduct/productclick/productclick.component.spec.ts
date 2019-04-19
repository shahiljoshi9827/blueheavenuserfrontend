import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductclickComponent } from './productclick.component';

describe('ProductclickComponent', () => {
  let component: ProductclickComponent;
  let fixture: ComponentFixture<ProductclickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductclickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
