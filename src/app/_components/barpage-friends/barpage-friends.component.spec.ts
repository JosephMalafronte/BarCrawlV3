import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarpageFriendsComponent } from './barpage-friends.component';

describe('BarpageFriendsComponent', () => {
  let component: BarpageFriendsComponent;
  let fixture: ComponentFixture<BarpageFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarpageFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarpageFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
