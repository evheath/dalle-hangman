import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevDalleButtonComponent } from './prev-dalle-button.component';

describe('PrevDalleButtonComponent', () => {
  let component: PrevDalleButtonComponent;
  let fixture: ComponentFixture<PrevDalleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevDalleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrevDalleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
