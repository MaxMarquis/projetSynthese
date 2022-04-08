import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreActionsComponent } from './barre-actions.component';

describe('BarreActionsComponent', () => {
  let component: BarreActionsComponent;
  let fixture: ComponentFixture<BarreActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
