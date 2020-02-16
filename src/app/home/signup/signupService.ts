import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NewUser } from './new-user';

@Injectable()
export class SignupService {
    
    constructor(private http: HttpClient) {}

    signup(newUser: NewUser) {
        return this.http.post('http://79d23ef9.ngrok.io/v1/' + 'User', newUser);
    }
}