import { Component, OnInit } from '@angular/core';
import {Camera, CameraResultType, CameraSource, Photo} from "@capacitor/camera";

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  photo: string | undefined = ""

  async takePicture() {
    const image: Photo = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
    console.info("webpath" + image.webPath);
    this.photo = image.webPath;
  }
  constructor() { }

  ngOnInit() {}

}
