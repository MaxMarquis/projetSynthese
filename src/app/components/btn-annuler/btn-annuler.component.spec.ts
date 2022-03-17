import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAnnulerComponent } from './btn-annuler.component';

describe('BtnAnnulerComponent', () => {
  let component: BtnAnnulerComponent;
  let fixture: ComponentFixture<BtnAnnulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAnnulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnAnnulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
