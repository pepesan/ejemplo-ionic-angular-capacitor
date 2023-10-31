import { Component, OnInit } from '@angular/core';
import { Geolocation, GeolocationPosition } from '@capacitor/geolocation';
@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {
  latitude: number | undefined;
  longitude: number | undefined;

  constructor() { }

  async ngOnInit() {
    await this.getCurrentPosition();
  }

  async getCurrentPosition() {
    try {
      const position: GeolocationPosition = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    } catch (error) {
      console.log('Error al obtener la posición:', error);
    }
  }

}
