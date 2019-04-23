import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { MaterialCDKModule } from '../_material/cdk/material.cdk.module';
// tslint:disable-next-line:max-line-length
// import { MDBBootstrapModule, ButtonsModule, CarouselModule, ChartsModule, WavesModule, ModalModule, NavbarModule, PopoverModule, TooltipModule, CollapseModule, InputsModule } from 'angular-bootstrap-md';

const appRoutes = [
  {
    path: '',
    component: HomeComponent

  },


];



@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),

    MaterialCDKModule,
    // MDBBootstrapModule.forRoot(),
    // ButtonsModule,
    // CarouselModule,
    // ChartsModule,
    // CollapseModule,
    // InputsModule,
    // ModalModule,
    // NavbarModule,
    // PopoverModule,
    // TooltipModule,
    // WavesModule,
    // MDBBootstrapModule
  ]
})
export class HomeModule { }
