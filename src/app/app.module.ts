import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialCDKModule } from './_material/cdk/material.cdk.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadService } from './services/upload.service';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VrModeComponent } from './vr-mode/vr-mode.component';
import { CommonModule } from '@angular/common';
import {WebcamModule} from 'ngx-webcam';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    VrModeComponent,


  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialCDKModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialCDKModule,
    ImageCropperModule,
    HttpClientModule,
    FlexLayoutModule,
    WebcamModule
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
