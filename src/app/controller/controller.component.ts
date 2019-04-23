import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UploadImage, IUploadImage } from '../Models/UploadImage';
import { UploadService } from '../services/upload.service';
import { Observable } from 'rxjs';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  fileUploader: any;
  isSaving: boolean;
  folderName: string;
  uploadImageDetails: IUploadImage;

  // tslint:disable-next-line:variable-name
  public _uploadImageDetails: IUploadImage;
  constructor(
    private uploadService: UploadService
  ) { }

  ngOnInit() {
    this.uploadImageDetails = new UploadImage();
  }

  capture() {
    console.log('In the capture function');
  }

  upload() {


    console.log('In upload');

    console.log(this.uploadImageDetails);

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


}
