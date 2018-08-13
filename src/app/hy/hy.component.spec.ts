import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyComponent } from './hy.component';

describe('HyComponent', () => {
  let component: HyComponent;
  let fixture: ComponentFixture<HyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
