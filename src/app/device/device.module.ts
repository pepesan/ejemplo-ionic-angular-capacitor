import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DevicePageRoutingModule } from './device-routing.module';
import { IonicModule } from '@ionic/angular';
import { DeviceComponent } from './device/device.component';
const routes: Routes = [
  {
    path: '',
    component: DeviceComponent
  }
];

@NgModule({
  declarations: [DeviceComponent],
  imports: [
    CommonModule,
    IonicModule,
    DevicePageRoutingModule
  ],

})




export class DeviceModule {}
