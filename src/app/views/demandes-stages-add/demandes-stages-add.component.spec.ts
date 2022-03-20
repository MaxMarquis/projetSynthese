import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesStagesAddComponent } from './demandes-stages-add.component';

describe('DemandesStagesAddComponent', () => {
  let component: DemandesStagesAddComponent;
  let fixture: ComponentFixture<DemandesStagesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesStagesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesStagesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
