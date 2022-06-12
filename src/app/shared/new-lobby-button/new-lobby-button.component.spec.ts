import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLobbyButtonComponent } from './new-lobby-button.component';

describe('NewLobbyButtonComponent', () => {
  let component: NewLobbyButtonComponent;
  let fixture: ComponentFixture<NewLobbyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLobbyButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLobbyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
