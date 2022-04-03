import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresStagesViewComponent } from './offres-stages-view.component';

describe('OffresStagesViewComponent', () => {
  let component: OffresStagesViewComponent;
  let fixture: ComponentFixture<OffresStagesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresStagesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresStagesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
