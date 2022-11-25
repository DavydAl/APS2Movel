import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RickAndMort } from '../interface/feed';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  // constructor(private feed: FeedService) { }

  // async ngOnInit() {
  //   let lstEpisodeos = this.feed.listarPersonagens();
  //   console.log(lstEpisodeos)
  // }
  // items: any = [];
  // itemsPage: any = [];
  // private readonly offset: number = 20;
  // private index: number = 0;
  // variavel = 1000;


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


  personagens: RickAndMort[] = [];

  itemsPage: any = [];

  // variavel
  constructor(private httpClient: HttpClient) { }
  async ngOnInit() {
    this.carregaPersonagens(event);
  }

  //-------------------------------             NÃO MEXE                     ---------------
  carregaPersonagens(event: any) {
    this.httpClient.get<any>("https://rickandmortyapi.com/api/character").subscribe(resposta => {
      console.log(resposta)
      this.personagens = resposta.results;
    });

    if (event) {
      event.target.complete();
    }
  }
  //-------------------------------------------------------------------------------
  private index: number = 0;
  private readonly offset: number = 20;
  variavel = 1000;
  loadData(personagem: any) {

    // let variavel = personagem.
    //   // 
    //   // this.carregaPersonagens(event);
    //   setTimeout(() => {
    //     let news = this.personagens.slice(this.index, this.offset + this.index);
    //     this.index += this.offset;

    //     event.target.complete();

    //     if (this.itemsPage.length === this.variavel) {
    //       event.target.disabled = true;
    //     }
    //   }, 800);

  }



}





