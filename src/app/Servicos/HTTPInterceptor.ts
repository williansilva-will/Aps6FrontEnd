import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { BackendService } from './backend.service';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private bs: BackendService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const Token = this.bs.PegarToken();
    req = req.clone({
        setHeaders: {
            Authorization: "Bearer " + Token
        }
    });
    return next.handle(req);
  }
}
