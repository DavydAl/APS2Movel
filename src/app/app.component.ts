import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'login', url: '/login', icon: 'paper-plane' },
    { title: 'feed', url: 'feed', icon: 'heart' },
  ];

  constructor() { }
}
