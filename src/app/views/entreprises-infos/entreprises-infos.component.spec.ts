import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisesInfosComponent } from './entreprises-infos.component';

describe('EntreprisesInfosComponent', () => {
  let component: EntreprisesInfosComponent;
  let fixture: ComponentFixture<EntreprisesInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreprisesInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreprisesInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
