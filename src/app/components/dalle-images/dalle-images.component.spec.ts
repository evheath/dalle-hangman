import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DalleImagesComponent } from './dalle-images.component';

describe('DalleImagesComponent', () => {
  let component: DalleImagesComponent;
  let fixture: ComponentFixture<DalleImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DalleImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DalleImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
