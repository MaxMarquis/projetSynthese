import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesStagesComponent } from './demandes-stages.component';

describe('DemandesStagesComponent', () => {
  let component: DemandesStagesComponent;
  let fixture: ComponentFixture<DemandesStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesStagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
