import { Component, OnInit } from '@angular/core';
import { firstValueFrom, lastValueFrom } from 'rxjs';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { FeedService } from '../services/feed.service';
import { HttpClient } from '@angular/common/http';
import { RickAndMort } from '../interface/feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage {
  // constructor(private feed: FeedService) { }

  // async ngOnInit() {
  //   let lstEpisodeos = this.feed.listarPersonagens();
  //   console.log(lstEpisodeos)
  // }
  items: any = [];
  itemsPage: any = [];
  private readonly offset: number = 20;
  private index: number = 0;
  variavel = 1000;

  constructor(private httpClient: HttpClient, private feed: FeedService) { this.loadProuct() }

  //   for (let i = 0; i < this.variavel; i++) {
  //     this.items.push(`Item ${i + 1}`)
  //   }
  //   this.itemsPage = this.items.slice(this.index, this.offset + this.index);
  //   this.index += this.offset;
  // }

  // loadData(event: any) {

  //   setTimeout(() => {
  //     let news = this.items.slice(this.index, this.offset + this.index);
  //     this.index += this.offset;

  //     for (let i = 0; i < news.length; i++) {
  //       this.itemsPage.push(news[i]);
  //     }
  //     event.target.complete();

  //     if (this.itemsPage.length === this.variavel) {
  //       event.target.disabled = true;
  //     }
  //   }, 800);

  // }

  // async ngOnInit(): Promise<void> {
  //   let personagens = await lastValueFrom(this.feed.listarPersonagens());
  //   console.log(personagens);
  // }
  products = [];
  loadProuct() {
    this.httpClient.get('https://rickandmortyapi.com/api/character').subscribe(res => {
      console.log(res);
      this.products = this.products.concat(res['data']);
    })
  }

}



  //

  // loadProuct(){
  //   this.httpClient.get('https://rickandmortyapi.com/api/character').subscribe(res => {
  //     this.products = this.products.concat(res['data']);
  //   })
  // }





