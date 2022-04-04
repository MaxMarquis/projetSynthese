import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisesViewComponent } from './entreprises-view.component';

describe('EntreprisesViewComponent', () => {
  let component: EntreprisesViewComponent;
  let fixture: ComponentFixture<EntreprisesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreprisesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreprisesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
