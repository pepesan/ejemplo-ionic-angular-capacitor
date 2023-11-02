import {Component, OnDestroy, OnInit} from '@angular/core';
import {App, AppInfo, AppLaunchUrl, AppState, RestoredListenerEvent, URLOpenListenerEvent} from '@capacitor/app';
@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit, OnDestroy {

  url: AppLaunchUrl | undefined;

  isActive: boolean = false;

  openEvent: URLOpenListenerEvent = {
    url: "",
    iosSourceApplication: "",
    iosOpenInPlace: false
  }

  restoredEvent: RestoredListenerEvent ={
    pluginId: "",
    methodName: "",
    data: "",
    success: false,
    error: {
      message: ""
    }
  }
  info: AppInfo | undefined;
  state: AppState | undefined;

  constructor() { }

  async ngOnInit() {
    this.info = await App.getInfo();
    this.state = await App.getState();
    this.url = await App.getLaunchUrl();
    App.addListener('appStateChange', ({ isActive }) => {
      this.isActive = isActive;
      console.log('App state changed. Is active?', isActive);
    });

    App.addListener('appUrlOpen', data => {
      this.openEvent = data
      console.log('App opened with URL:', data);
    });

    App.addListener('appRestoredResult', data => {
      this.restoredEvent = data;
      console.log('Restored state:', data);
    });

    this.checkAppLaunchUrl();
  }

  ngOnDestroy(): void {
    App.removeAllListeners();
  }


  async checkAppLaunchUrl() {
    this.url = await App.getLaunchUrl();
    console.log('App opened with URL: ' + this.url);
    // Aquí podrías manejar la lógica relacionada con la apertura de la aplicación a través de una URL de lanzamiento
  }

}
