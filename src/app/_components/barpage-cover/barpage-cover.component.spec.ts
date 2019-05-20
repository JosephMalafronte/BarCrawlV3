import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarpageCoverComponent } from './barpage-cover.component';

describe('BarpageCoverComponent', () => {
  let component: BarpageCoverComponent;
  let fixture: ComponentFixture<BarpageCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarpageCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarpageCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
