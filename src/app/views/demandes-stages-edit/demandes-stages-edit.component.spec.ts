import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesStagesEditComponent } from './demandes-stages-edit.component';

describe('DemandesStagesEditComponent', () => {
  let component: DemandesStagesEditComponent;
  let fixture: ComponentFixture<DemandesStagesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesStagesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesStagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
