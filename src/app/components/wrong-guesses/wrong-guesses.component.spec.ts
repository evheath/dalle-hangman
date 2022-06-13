import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongGuessesComponent } from './wrong-guesses.component';

describe('WrongGuessesComponent', () => {
  let component: WrongGuessesComponent;
  let fixture: ComponentFixture<WrongGuessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongGuessesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongGuessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
