import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { FeedService } from '../services/feed.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage {
  public personagem = new Array<any>();
  public page: number = 1;

  constructor(private rick: FeedService, public loadingCtrl: LoadingController) {
  }


  ionViewDidEnter() {
    this.efeitoLoading();
    this.carregaPagina();
  }

  async efeitoLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Carregando personagens',
      duration: 1000,
      spinner: 'lines-sharp'
    });

    loading.present();
  }

  handleRefresh(event: any) {
    this.page = 1;
    this.carregaPagina();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  efeitoScrollInfinito(event: any) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      this.page++;
      this.carregaPagina();

    }, 1500);
  }


  carregaPagina() {
    this.rick.listarPersonagens(this.page).subscribe(
      data => {
        const response = data as any;
        if (this.page == 1) {
          this.personagem = response.results;
        } else {
          this.personagem = this.personagem.concat(response.results);
        }
      },
      error => {
        console.log('deu erro');
      }
    );
  }


}





