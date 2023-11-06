import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BatteryInfo, Device, DeviceInfo} from "@capacitor/device";

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})

export class DevicePage implements OnInit {

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

  batteryInfo: BatteryInfo = {
    batteryLevel: 0,
    isCharging: false
  }

  constructor() {
  }

  async ngOnInit() {
    this.info = await Device.getInfo();
    console.info("APP:INFO:"+JSON.stringify(this.info));
    this.batteryInfo = await Device.getBatteryInfo();
    console.info("APP:INFO:"+JSON.stringify(this.batteryInfo));
  }

}
