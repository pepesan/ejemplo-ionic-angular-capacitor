import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'App', url: '/device/app', icon: 'apps' },
    { title: 'Device', url: '/device', icon: 'mail' },
    { title: 'Camera', url: '/device/camera', icon: 'camera' },
    { title: 'Geo', url: '/device/geolocation', icon: 'globe' },
    { title: 'Network', url: '/device/network', icon: 'wifi' },
    { title: 'Screen Orientation', url: '/device/orientation', icon: 'swap-vertical' },
    { title: 'Preferences', url: '/device/preferences', icon: 'cog' },
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
