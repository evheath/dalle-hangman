import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDalleButtonComponent } from './next-dalle-button.component';

describe('NextDalleButtonComponent', () => {
  let component: NextDalleButtonComponent;
  let fixture: ComponentFixture<NextDalleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextDalleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextDalleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
