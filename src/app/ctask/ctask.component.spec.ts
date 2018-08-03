import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaskComponent } from './ctask.component';

describe('CtaskComponent', () => {
  let component: CtaskComponent;
  let fixture: ComponentFixture<CtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
