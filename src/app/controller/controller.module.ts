import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControllerComponent } from './controller.component';
import { RouterModule } from '@angular/router';
import { MaterialCDKModule } from '../_material/cdk/material.cdk.module';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

const routes = [
  {
    path: '',
    component: ControllerComponent
  }
]


@NgModule({
  declarations: [
    ControllerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialCDKModule,
    FormsModule,
    ImageCropperModule
  ]
})
export class ControllerModule { }
