import { Component, OnInit } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

const apiKey = 'YOUR_API_KEY_HERE';

const mapRef = document.getElementById('map');

// const newMap = await GoogleMap.create({
//   id: 'my-map', // Unique identifier for this map instance
//   element: mapRef, // reference to the capacitor-google-map element
//   apiKey: apiKey, // Your Google Maps API Key
//   config: {
//     center: {
//       // The initial position to be rendered by the map
//       lat: 33.6,
//       lng: -117.9,
//     },
//     zoom: 8, // The initial zoom level to be rendered by the map
//   },
// });

@Component({
  selector: 'app-geolocalizacao',
  templateUrl: './geolocalizacao.page.html',
  styleUrls: ['./geolocalizacao.page.scss'],
})
export class GeolocalizacaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
