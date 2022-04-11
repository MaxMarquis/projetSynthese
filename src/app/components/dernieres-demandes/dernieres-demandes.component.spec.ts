import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DernieresDemandesComponent } from './dernieres-demandes.component';

describe('DernieresDemandesComponent', () => {
  let component: DernieresDemandesComponent;
  let fixture: ComponentFixture<DernieresDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DernieresDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DernieresDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
