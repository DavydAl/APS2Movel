import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public usuario: string = "";
  public senha: string = "";
  public msg: string = "";

  constructor(public ususarioService: UsuarioService, public router: Router, public toastController: ToastController) { }

  ngOnInit() {
  }

  login() {
    this.ususarioService.loginNoFireBase(this.usuario, this.senha).then((res) => {
      this.router.navigate(['home']);
    }).catch((error) => {
      this.msg = "Usuario e/ou senha incorretos";
      this.exibeMensagem();
    })
  }

  async exibeMensagem() {
    const toast = await this.toastController.create({
      message: this.msg,
      duration: 2000
    });
    toast.present();
  }

}
