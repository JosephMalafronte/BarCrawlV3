import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarpageMapComponent } from './barpage-map.component';

describe('BarpageMapComponent', () => {
  let component: BarpageMapComponent;
  let fixture: ComponentFixture<BarpageMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarpageMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarpageMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
