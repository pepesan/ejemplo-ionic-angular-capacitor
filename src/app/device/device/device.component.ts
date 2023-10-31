import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Device, DeviceInfo} from "@capacitor/device";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
})

export class DeviceComponent  implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  cadena: string = "hola";
  info: DeviceInfo = {
    operatingSystem: "android",
    platform: "web",
    isVirtual: false,
    manufacturer: "",
    model: "",
    osVersion: "",
    webViewVersion: ""

  };

  logDeviceInfo = async () => {
    const info = Device.getInfo();

    console.log(info);
  };

  logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo();

    console.log(info);
  };

  constructor() {
  }

  async ngOnInit() {
    this.info = await Device.getInfo();
  }

}
