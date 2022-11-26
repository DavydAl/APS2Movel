import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Usuario } from '../interface/usuario';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient,
    private router: Router, public ngFireAuth: AngularFireAuth) { }

  // logar(usuario: Usuario): Observable<any> {
  //   return this.mockUsuario(usuario);
  // }

  // private mockUsuario(usuario: Usuario): Observable<any> {
  //   var retornoMock: any = [];

  //   if (usuario.email === "t@t" && usuario.senha == "123") {
  //     retornoMock.sucesso = true;
  //     retornoMock.usuario = usuario;
  //     return of(retornoMock);
  //   }
  //   return of(retornoMock);


  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }

  loginNoFireBase(ususario: string, senha: string) {
    return this.ngFireAuth.signInWithEmailAndPassword(ususario, senha);

  }
}
