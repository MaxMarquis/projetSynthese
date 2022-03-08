import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresStagesComponent } from './offres-stages.component';

describe('OffresStagesComponent', () => {
  let component: OffresStagesComponent;
  let fixture: ComponentFixture<OffresStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffresStagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffresStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
