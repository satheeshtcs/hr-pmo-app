import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assign1Component } from './assign1.component';

describe('Assign1Component', () => {
  let component: Assign1Component;
  let fixture: ComponentFixture<Assign1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assign1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assign1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
