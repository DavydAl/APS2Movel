import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GeolocalizacaoPageRoutingModule } from './geolocalizacao-routing.module';
import { GeolocalizacaoPage } from './geolocalizacao.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeolocalizacaoPageRoutingModule
  ],
  declarations: [GeolocalizacaoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GeolocalizacaoPageModule { }
