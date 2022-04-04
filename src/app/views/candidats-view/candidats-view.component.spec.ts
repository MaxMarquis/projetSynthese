import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatsViewComponent } from './candidats-view.component';

describe('CandidatsViewComponent', () => {
  let component: CandidatsViewComponent;
  let fixture: ComponentFixture<CandidatsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
