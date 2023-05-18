import { Component, EventEmitter, Output} from '@angular/core';
import { WebcamImage} from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';



@Component({
  selector: 'app-pop-up-webcam',
  templateUrl: './pop-up-webcam.component.html',
  styleUrls: ['./pop-up-webcam.component.css']
})
export class PopUpWebcamComponent {

  private trigger: Subject<any> = new Subject();
  public webcamImage!: WebcamImage;
  private nextWebcam: Subject<any> = new Subject();
  public isVisible = false;
  @Output() imageSetted = new EventEmitter<WebcamImage>();
  sysImage = '';

  constructor() { }

  ngOnInit(): void {
  }


  public getSnapshot(): void {
    this.trigger.next(void 0);
    this.isVisible = true;
  }
  public captureImg(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.sysImage = webcamImage!.imageAsDataUrl;
  }
  public get invokeObservable(): Observable<any> {
    return this.trigger.asObservable();
  }
  public get nextWebcamObservable(): Observable<any> {
    return this.nextWebcam.asObservable();
  }

  public setDefinitiveImage(): void {
      this.imageSetted.emit(this.webcamImage);
  }

}


