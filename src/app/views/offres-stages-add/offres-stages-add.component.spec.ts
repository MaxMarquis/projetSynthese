import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresStagesAddComponent } from './offres-stages-add.component';

describe('OffresStagesAddComponent', () => {
  let component: OffresStagesAddComponent;
  let fixture: ComponentFixture<OffresStagesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresStagesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresStagesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
