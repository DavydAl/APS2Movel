import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  logar(usuario: Usuario): Observable<any> {
    return this.mockUsuario(usuario);
  }

  private mockUsuario(usuario: Usuario): Observable<any> {
    var retornoMock: any = [];

    if (usuario.email === "t@t" && usuario.senha == "123") {
      retornoMock.sucesso = true;
      retornoMock.usuario = usuario;
      return of(retornoMock);
    }
    return of(retornoMock);
  }

  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
