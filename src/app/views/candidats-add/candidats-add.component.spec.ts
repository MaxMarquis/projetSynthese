import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatsAddComponent } from './candidats-add.component';

describe('CandidatsAddComponent', () => {
  let component: CandidatsAddComponent;
  let fixture: ComponentFixture<CandidatsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
