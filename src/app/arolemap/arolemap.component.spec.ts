import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArolemapComponent } from './arolemap.component';

describe('ArolemapComponent', () => {
  let component: ArolemapComponent;
  let fixture: ComponentFixture<ArolemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArolemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArolemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
