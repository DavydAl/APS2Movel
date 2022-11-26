import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RickAndMort } from '../interface/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private httpClient: HttpClient) { }
  // private caminhoPadrao = "https://rickandmortyapi.com/api/character";

  // listarPersonagens() {
  //   return this.httpClient.get<RickAndMort[]>('https://rickandmortyapi.com/api/character');
  // }


  listarPersonagens(page = 1) {
    let personagens = `https://rickandmortyapi.com/api/character?page=${page}`;
    return this.httpClient.get(personagens);

  }

}
