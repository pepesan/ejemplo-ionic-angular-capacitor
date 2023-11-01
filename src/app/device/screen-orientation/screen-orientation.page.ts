import { Component, OnInit } from '@angular/core';
import {OrientationLockOptions, ScreenOrientation, ScreenOrientationResult} from '@capacitor/screen-orientation';
@Component({
  selector: 'app-screen-orientation',
  templateUrl: './screen-orientation.page.html',
  styleUrls: ['./screen-orientation.page.scss'],
})
export class ScreenOrientationPage implements OnInit {
  currentOrientation: string = "unknown";
  orientation: ScreenOrientationResult;

  constructor() {
    this.orientation = {
      type: "portrait-primary"
    }
  }

  ngOnInit() {
    this.getCurrentOrientation();
    this.registerOrientationChangeListener();
  }

  ngOnDestroy() {
    this.unregisterOrientationChangeListener();
  }

  async getCurrentOrientation() {
    const orientation = await ScreenOrientation.orientation();
    this.currentOrientation = orientation.type;
    console.log('Current orientation:', this.currentOrientation);
  }

  registerOrientationChangeListener() {
    ScreenOrientation.addListener('screenOrientationChange', (event) => {
      this.currentOrientation = event.type;
      console.log('APP:FUN:Orientation changed:', this.currentOrientation);
    });
  }

  unregisterOrientationChangeListener() {
    ScreenOrientation.removeAllListeners();
  }

  // intento de bloqueo de orientación
  lockOrientation() {
    ScreenOrientation.lock(<OrientationLockOptions>{
      orientation: "portrait"
    }).then((data)=>{
      console.log(data)
    });
    // También puedes probar con 'landscape' dependiendo de tu requerimiento
  }

  // liberación de intento de bloqueo de orientación
  unlockOrientation() {
    ScreenOrientation.unlock().then((data)=>{
      console.log(data)
    });
  }

}
