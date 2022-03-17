import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatsInfosComponent } from './candidats-infos.component';

describe('CandidatsInfosComponent', () => {
  let component: CandidatsInfosComponent;
  let fixture: ComponentFixture<CandidatsInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatsInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
