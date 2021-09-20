import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  token : any = null;

  constructor( private authService : AuthService ) { 
    console.log(this.authService.currentToken());
  }

  ngOnInit() {
    console.log(this.authService.currentToken());
  }

  intercept(req: any, next: any) {
    let tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.currentToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }

}
