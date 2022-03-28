import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandesStagesViewsComponent } from './demandes-stages-views.component';

describe('DemandesStagesViewsComponent', () => {
  let component: DemandesStagesViewsComponent;
  let fixture: ComponentFixture<DemandesStagesViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandesStagesViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandesStagesViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
