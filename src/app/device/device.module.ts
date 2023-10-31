import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DevicePageRoutingModule } from './device-routing.module';
import { IonicModule } from '@ionic/angular';
import { DevicePage } from './device/device.page';
import {CameraPage} from "./camera/camera.page";
const routes: Routes = [
  {
    path: '',
    component: DevicePage
  }
];

@NgModule({
  declarations: [DevicePage, CameraPage],
  imports: [
    CommonModule,
    IonicModule,
    DevicePageRoutingModule
  ],

})




export class DeviceModule {}
