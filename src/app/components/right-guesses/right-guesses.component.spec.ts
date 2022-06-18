import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightGuessesComponent } from './right-guesses.component';

describe('RightGuessesComponent', () => {
  let component: RightGuessesComponent;
  let fixture: ComponentFixture<RightGuessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightGuessesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightGuessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
