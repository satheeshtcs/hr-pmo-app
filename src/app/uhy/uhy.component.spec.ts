import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UhyComponent } from './uhy.component';

describe('UhyComponent', () => {
  let component: UhyComponent;
  let fixture: ComponentFixture<UhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
