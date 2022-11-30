import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pessoal', url: 'home', icon: 'person' },
    { title: 'Lista de Personagens', url: 'feed', icon: 'home' },
    { title: 'Geolocalização', url: 'geolocalizacao', icon: 'locate' },
    { title: 'Sair', url: 'login', icon: 'heart' },
  ];
  constructor() { }
}
