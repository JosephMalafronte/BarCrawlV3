import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarpageDealsComponent } from './barpage-deals.component';

describe('BarpageDealsComponent', () => {
  let component: BarpageDealsComponent;
  let fixture: ComponentFixture<BarpageDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarpageDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarpageDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
