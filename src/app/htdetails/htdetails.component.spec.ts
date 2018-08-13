import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtdetailsComponent } from './htdetails.component';

describe('HtdetailsComponent', () => {
  let component: HtdetailsComponent;
  let fixture: ComponentFixture<HtdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
