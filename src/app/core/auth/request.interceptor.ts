import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor(
        private tokenService: TokenService,
        private router: Router,
        private userServe: UserService
        ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): 
        Observable<HttpEvent<any> | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any>
        | HttpUserEvent<any>> {
            if(this.tokenService.hasToken()) {
                const token = 'Bearer ' + this.tokenService.getToken();
                req = req.clone({
                    setHeaders: {
                        'Authorization': token
                    }
                });
            }

            return next.handle(req)
                .pipe(tap( () => {console.log()},
                err => {
                    this.userServe.logout();
                    this.router.navigate(['']);
                }));
    }
}