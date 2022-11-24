import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { FeedService } from '../services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  // constructor(private feed: FeedService) { }

  // async ngOnInit() {
  //   let lstEpisodeos = this.feed.listarEpisodios();
  //   console.log(lstEpisodeos)
  // }
  lstepisodeos: any = [];


  constructor() {
    for (let i = 0; i < 20; i++) {
      this.lstepisodeos.push(`Item ${i + 1}`)
    }
  }
  ngOnInit(): void {

  }

  // ngOnInit() {
  //   this.generateItems();
  // }

  // private generateItems() {
  //   const count = this.items.length + 1;
  //   for (let i = 0; i < 50; i++) {
  //     this.items.push(`Item ${count + i}`);
  //   }
  // }

  // onIonInfinite(ev) {
  //   this.generateItems();
  //   setTimeout(() => {
  //     (ev as InfiniteScrollCustomEvent).target.complete();
  //   }, 500);
  // }
}
