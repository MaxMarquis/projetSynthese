import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajOffreComponent } from './maj-offre.component';

describe('MajOffreComponent', () => {
  let component: MajOffreComponent;
  let fixture: ComponentFixture<MajOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajOffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
