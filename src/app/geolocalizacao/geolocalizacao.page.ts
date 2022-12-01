import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';

import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment.prod';

let map: GoogleMap;

@Component({
  selector: 'app-geolocalizacao',
  templateUrl: './geolocalizacao.page.html',
  styleUrls: ['./geolocalizacao.page.scss'],
})
export class GeolocalizacaoPage implements OnInit {
  @ViewChild('map') mapRef!: ElementRef;


  constructor() {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      forceCreate: true,
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      }
    });

  }




  // newMap: GoogleMap | undefined;

  // async createMap() {
  //   this.newMap = await GoogleMap.create({
  //     id: 'my-cool-map',
  //     element: this.mapRef.nativeElement,
  //     apiKey: environment.mapsKey,
  //     config: {
  //       center: {
  //         lat: 33.6,
  //         lng: -117.9,
  //       },
  //       zoom: 8,
  //     },
  //   });
  // }

}
