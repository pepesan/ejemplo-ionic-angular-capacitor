import { Component, OnInit } from '@angular/core';
import {StatusBar, Style} from "@capacitor/status-bar";

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.page.html',
  styleUrls: ['./status-bar.page.scss'],
})
export class StatusBarPage implements OnInit {

  constructor() { }

  async ngOnInit() {
    await this.setLightStatusBar();
  }

  async setDarkStatusBar() {
    await StatusBar.setStyle({ style: Style.Dark });
    // Establece el estilo de la barra de estado en modo oscuro
  }

  async setLightStatusBar() {
    await StatusBar.setStyle({ style: Style.Light });
    // Establece el estilo de la barra de estado en modo claro
  }

  async setBackgroundColor() {
    await StatusBar.setBackgroundColor({ color: '#3880ff' });
    // Establece el color de fondo de la barra de estado
  }

  async hideStatusBar() {
    await StatusBar.hide();
    // Oculta la barra de estado
  }

  async showStatusBar() {
    await StatusBar.show();
    // Muestra la barra de estado
  }

}
