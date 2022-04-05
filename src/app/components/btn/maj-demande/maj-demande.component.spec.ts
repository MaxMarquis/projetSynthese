import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajDemandeComponent } from './maj-demande.component';

describe('MajDemandeComponent', () => {
  let component: MajDemandeComponent;
  let fixture: ComponentFixture<MajDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
