import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UploadImage, IUploadImage } from '../Models/UploadImage';
import { UploadService } from '../services/upload.service';
import { Observable, Subject } from 'rxjs';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { JAN } from '@angular/material';
import { WebcamUtil, WebcamInitError, WebcamImage } from 'ngx-webcam';


declare var fullScreen: any;

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string;
  public videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
  public errors: WebcamInitError[] = [];

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  /*Web camera******************* up variables****/
  
  imageChangedEvent: any = '';
  croppedImage: any = '';
  fileUploader: any;
  isSaving: boolean;
  folderName: string;
  uploadImageDetails: IUploadImage;
  panelOpenState = false;
  // tslint:disable-next-line:variable-name
  public _uploadImageDetails: IUploadImage;
  constructor(
    private uploadService: UploadService
  ) { }

  ngOnInit() {
    this.uploadImageDetails = new UploadImage();
    fullScreen();

    /*Web camera****/
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  capture() {
    console.log('In the capture function');
  }

  upload() {


    console.log('In upload');

    console.log(this.uploadImageDetails);
    this.uploadService.create(this.uploadImageDetails).subscribe(
      res => {
        alert('RES :' + JSON.stringify(res));
      }
      , err => {
        alert('ERR :' + JSON.stringify(err));

      },
      () => {

        // tslint:disable-next-line:quotemark
        alert("done");
      }
    );
    // this.subscribeToSaveResponse(this.uploadService.create(this.uploadImageDetails));
  }

  save() {
    console.log('In save');
  }

  get uploadDetails() {
    return this._uploadImageDetails;
  }

  set uploadDetails(uploadImage: IUploadImage) {
    this._uploadImageDetails = this.uploadImageDetails;
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  // tslint:disable-next-line:typedef
  imageCropped(event: ImageCroppedEvent) {
    this.uploadImageDetails.image = event.base64;
    // userProfilePicture.profilePicture = event.base64;
    //
  }
  // tslint:disable-next-line:typedef
  imageLoaded() {
    console.log('Imge is loaded');
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  private subscribeToSaveResponse(result: Observable<HttpResponse<IUploadImage>>) {
    result.subscribe((res: HttpResponse<IUploadImage>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError(res));
  }

  private onSaveSuccess() {
    this.isSaving = false;


    this.fileUploader.value = null;

  }

  private onSaveError(res) {
    this.isSaving = false;
    alert(JSON.stringify(res));
  }

  goFullscreen() {
    fullScreen();
  }
  /*Web camera ****************************************/


  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    // tslint:disable-next-line:no-console
    console.info('received webcam image', webcamImage);
    this.webcamImage = webcamImage;
  }

  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }


}
