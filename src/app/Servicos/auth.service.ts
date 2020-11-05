import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private bs: BackendService, private route: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
    {
      if(this.bs.EstaLogado() !== true){
        window.alert("Acesso não Autorizado!");
        this.route.navigate(['ministerioAmbiente/login']);
      }
      return true;
    }
  
}
