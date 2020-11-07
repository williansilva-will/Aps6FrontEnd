import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NovoUsuario, UsuarioAtual} from 'src/app/Modelos/usuario';
import { NovoRegistro, Registro} from 'src/app/Modelos/registro';
import { Router } from '@angular/router';
  
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  apiUrlUser = 'localhost:54912/api/user';
  apiUrlRegistro = 'localhost:54912/api/registro';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private route: Router) {
  }

  getRegistros(userName: string){
    return this.http.get<Registro[]>(`${this.apiUrlRegistro}/${userName}`);
  }
  
  postRegistro(registro: FormData){
    return this.http.post<any>(this.apiUrlRegistro , registro).subscribe((res) => {},
      (error) => {catchError(this.ErrorHandler);});
  }

  postUsuario(usuario: FormData){
    return this.http.post<any>(`${this.apiUrlUser}/register`, usuario).subscribe((res) => {
      this.route.navigate(['ministerioAmbiente/login']);
      
    }, (error) => {
      catchError(this.ErrorHandler);
      
    });
  }

  Login(usuario: FormData) {
    return this.http.post<any>(`${this.apiUrlUser}/login`, usuario).subscribe((res) =>{
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', res.user);
      
      this.route.navigate(['ministerioAmbiente/registros']);
    }, (error) => {
      catchError(this.ErrorHandler);
      
    });
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

  PegarUsuario(): UsuarioAtual {
    var user: UsuarioAtual;
    return user = JSON.parse(localStorage.getItem('user')); 
  }

  ErrorHandler(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Código do erro: ${error.status}\n Mensagem: ${error.message}`;
    }
    return throwError(msg);
  }
}
