import { Component, OnInit } from '@angular/core';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';
@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {
  latitude: number | undefined = 0;
  longitude: number | undefined = 0;

  constructor() { }

  async ngOnInit() {
    await this.getCurrentPosition();
  }

  async getCurrentPosition() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      console.log("APP:INFO:"
        + position.coords.latitude
        +","
        + position.coords.longitude);
    } catch (error) {
      console.log("APP:INFO:"+'Error al obtener la posición:', error);
    }
  }

}
