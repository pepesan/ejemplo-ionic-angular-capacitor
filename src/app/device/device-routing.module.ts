import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicePage } from './device/device.page';
import {CameraPage} from "./camera/camera.page";
import {GeolocationPage} from "./geolocation/geolocation.page";
import {NetworkPage} from "./network/network.page";
import {ScreenOrientationPage} from "./screen-orientation/screen-orientation.page";
import {PreferencesPage} from "./preferences/preferences.page";
import {AppPage} from "./app/app.page";

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
  ,
  {
    path: 'network',
    component: NetworkPage
  },
  {
    path: 'orientation',
    component: ScreenOrientationPage
  },
  {
    path: 'preferences',
    component: PreferencesPage
  },
  {
    path: 'app',
    component: AppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicePageRoutingModule {}
