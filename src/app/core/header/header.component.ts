import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'bc-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent {

    // Boa pratica: Sempre colocar '$' em variáveis do tipo Observavle 
    isLogado: boolean = false;

    constructor(
        private userServe: UserService,
        private router: Router){
        this.isLogado = userServe.isLogged();
    }

    logout() {
        this.userServe.logout();
        this.router.navigate(['']);
    }
}