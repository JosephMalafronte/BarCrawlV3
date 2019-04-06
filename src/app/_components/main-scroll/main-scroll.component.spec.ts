import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScrollComponent } from './main-scroll.component';

describe('MainScrollComponent', () => {
  let component: MainScrollComponent;
  let fixture: ComponentFixture<MainScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
