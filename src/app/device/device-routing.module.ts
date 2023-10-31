import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicePage } from './device/device.page';
import {CameraPage} from "./camera/camera.page";
import {GeolocationPage} from "./geolocation/geolocation.page";

const routes: Routes = [
  {
    path: '',
    component: DevicePage
  },
  {
    path: 'camera',
    component: CameraPage
  },
  {
    path: 'geolocation',
    component: GeolocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicePageRoutingModule {}
