import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RickAndMort } from '../interface/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private httpClient: HttpClient) { }

  listarPersonagens() {
    return this.httpClient.get<RickAndMort[]>('https://rickandmortyapi.com/api/character');
  }

}
