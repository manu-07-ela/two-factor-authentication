import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpWebcamComponent } from './pop-up-webcam.component';

describe('PopUpWebcamComponent', () => {
  let component: PopUpWebcamComponent;
  let fixture: ComponentFixture<PopUpWebcamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpWebcamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
