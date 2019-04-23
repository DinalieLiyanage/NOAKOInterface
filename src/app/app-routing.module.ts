import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { VrModeComponent } from './vr-mode/vr-mode.component';
// tslint:disable-next-line:max-line-length
import { MDBBootstrapModule, ButtonsModule, CarouselModule, ChartsModule, CollapseModule, InputsModule, PopoverModule, WavesModule, ModalModule, NavbarModule, TooltipModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'controller',
    loadChildren: './controller/controller.module#ControllerModule'
  },
  {
    path: 'vrMode',
    component: VrModeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    CommonModule,
    ButtonsModule,
    CarouselModule,
    ChartsModule,
    CollapseModule,
    InputsModule,
    ModalModule,
    NavbarModule,
    PopoverModule,
    TooltipModule,
    WavesModule,
    MDBBootstrapModule
  ],
  exports: [RouterModule],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppRoutingModule { }
