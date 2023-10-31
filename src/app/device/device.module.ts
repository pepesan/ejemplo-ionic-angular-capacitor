import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DevicePageRoutingModule } from './device-routing.module';
import { IonicModule } from '@ionic/angular';
import { DevicePage } from './device/device.page';
import {CameraPage} from "./camera/camera.page";
import {FormsModule} from "@angular/forms";
import {GeolocationPage} from "./geolocation/geolocation.page";
const routes: Routes = [
  {
    path: '',
    component: DevicePage
  }
];

@NgModule({
  declarations: [DevicePage, CameraPage, GeolocationPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicePageRoutingModule
  ],

})




export class DeviceModule {}
