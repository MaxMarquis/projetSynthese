import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMajComponent } from './btn-maj.component';

describe('BtnMajComponent', () => {
  let component: BtnMajComponent;
  let fixture: ComponentFixture<BtnMajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnMajComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnMajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
