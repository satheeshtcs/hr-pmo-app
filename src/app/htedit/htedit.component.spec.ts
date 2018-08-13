import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HteditComponent } from './htedit.component';

describe('HteditComponent', () => {
  let component: HteditComponent;
  let fixture: ComponentFixture<HteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
