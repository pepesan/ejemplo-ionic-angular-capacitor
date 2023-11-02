import { Component, OnInit } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';


interface Partido {
  nombre: string;
  dipu: number;
  imagen: string;
}

interface UserResponse {
  name: string;
  job: string;
  id: string;
  createdAt: Date;
}

@Component({
  selector: 'app-https',
  templateUrl: './https.page.html',
  styleUrls: ['./https.page.scss'],
})
export class HttpsPage implements OnInit {

  partidos: Partido[] = [];

  userResponse: UserResponse= {
    name: "",
    job: "",
    id: "",
    createdAt: new Date()
  }

  constructor() { }

  ngOnInit() {}

  async performGetRequest() {
    const options = {
      url: 'https://cursosdedesarrollo.com/pactometro/resultados.json',
    };

    const response: HttpResponse = await CapacitorHttp.get(options);
    this.partidos = response.data as Partido[];
  }

  async performPostRequest() {
    const options = {
      url: 'https://reqres.in/api/users',
      headers:{
        "Content-Type": "application/json"
      },
      data: {
        name: 'morpheus',
        job: 'leader'
      },
    };

    const response: HttpResponse = await CapacitorHttp.post(options);
    this.userResponse = response.data as UserResponse;
    console.log(this.userResponse);
  }

}
