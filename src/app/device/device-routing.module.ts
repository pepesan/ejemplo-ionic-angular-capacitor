import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicePage } from './device/device.page';
import {CameraPage} from "./camera/camera.page";

const routes: Routes = [
  {
    path: '',
    component: DevicePage
  },
  {
    path: 'camera',
    component: CameraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicePageRoutingModule {}
