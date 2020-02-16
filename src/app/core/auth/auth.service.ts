import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private userService: UserService 
        ) {}

    authenticate(auth: any) {
        return this.http
                .post('http://79d23ef9.ngrok.io/v1/' + 'authuser', auth, { observe: 'response' })
                .pipe(tap(res => {
                    const authToken = res.headers.get('x-access-token');
                    this.userService.setToken(authToken);
                    console.log(`User ${auth.username} authenticated with token ${authToken}`)
            }));
    }
}