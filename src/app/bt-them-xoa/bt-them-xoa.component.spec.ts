import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtThemXoaComponent } from './bt-them-xoa.component';

describe('BtThemXoaComponent', () => {
  let component: BtThemXoaComponent;
  let fixture: ComponentFixture<BtThemXoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtThemXoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtThemXoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
