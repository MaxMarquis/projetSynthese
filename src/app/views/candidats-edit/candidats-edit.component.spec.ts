import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatsEditComponent } from './candidats-edit.component';

describe('CandidatsEditComponent', () => {
  let component: CandidatsEditComponent;
  let fixture: ComponentFixture<CandidatsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
