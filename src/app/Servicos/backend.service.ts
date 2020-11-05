import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NovoUsuario, Usuario} from 'src/app/Modelos/usuario';
import { NovoRegistro, Registro} from 'src/app/Modelos/registro';
import { Router } from '@angular/router';
 

  
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  apiUrlUser = 'localhost:54912/api/user';
  apiUrlRegistro = 'localhost:54912/api/registro';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  UsuarioAtual= {};

  constructor(private http: HttpClient, private route: Router) {
  }

  getRegistros(){
    const user: any = this.PegarUsuario();
    return this.http.get<Registro[]>(this.apiUrlRegistro, user.userName);
  }
  
  postRegistro(registro: FormData){
    return this.http.post<any>(this.apiUrlRegistro , registro);
  }

  postUsuario(usuario: FormData){
    return this.http.post<any>(this.apiUrlUser + 'register', usuario);
  }

  Login(usuario: FormData) {
    return this.http.post<any>(this.apiUrlUser + 'login', usuario).subscribe(res =>{
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', res.user);
      this.route.navigate(['ministerioAmbiente/registros']);
    })
  }

  Logout(){
    let token = localStorage.removeItem('token');
    let user = localStorage.removeItem('user');
    if(token == null && user == null){
      this.route.navigate(['ministerioAmbiente/login']);
    }
  }

  EstaLogado(): boolean {
    let token = localStorage.getItem('token');
    return (token !== null) ? true : false;
  }

  PegarToken(){
    return localStorage.getItem('token');
  }

  PegarUsuario(){
    return localStorage.getItem('user');
  }
}
