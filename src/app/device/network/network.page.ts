import { Component, OnInit } from '@angular/core';
import {ConnectionStatus, Network} from '@capacitor/network';
@Component({
  selector: 'app-network',
  templateUrl: './network.page.html',
  styleUrls: ['./network.page.scss'],
})
export class NetworkPage implements OnInit {

  status: ConnectionStatus

  constructor() {
    this.status = {
      connected: false,
      connectionType: "none"
    };
  }


  async ngOnInit() {
    Network.addListener('networkStatusChange', status => {
      this.status = status;
      console.log('APP:Network status changed', status.connected);
      console.info('APP:Network status changed', status.connected);
      console.warn('APP:Network status changed', status.connected);
      console.error('APP:Network status changed', status.connected);
      console.debug('APP:Network status changed', status.connected);
    });

    await this.logCurrentNetworkStatus();

  }

  logCurrentNetworkStatus = async () => {
    this.status = await Network.getStatus();
    console.log('APP:FUNC:Network status changed',this.status.connected);
    console.info('APP:FUNC:Network status changed', this.status.connected);
    console.warn('APP:FUNC:Network status changed', this.status.connected);
    console.error('APP:FUNC:Network status changed', this.status.connected);
    console.debug('APP:FUNC:Network status changed', this.status.connected);
  };

}
