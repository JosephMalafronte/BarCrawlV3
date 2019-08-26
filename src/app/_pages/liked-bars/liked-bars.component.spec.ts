import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedBarsComponent } from './liked-bars.component';

describe('LikedBarsComponent', () => {
  let component: LikedBarsComponent;
  let fixture: ComponentFixture<LikedBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
