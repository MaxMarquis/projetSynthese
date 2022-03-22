import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresStagesEditComponent } from './offres-stages-edit.component';

describe('OffresStagesEditComponent', () => {
  let component: OffresStagesEditComponent;
  let fixture: ComponentFixture<OffresStagesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresStagesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresStagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
