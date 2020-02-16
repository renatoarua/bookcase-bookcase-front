import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core/user/user.service';

@Component({
    selector: 'bc-menu',
    templateUrl: 'menu.component.html',
    styles: [`
        mat-sidenav-container  {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }    
      `]
})
export class MenuComponent { 

    constructor(
        private userServe: UserService,
        private router: Router){
    }

    logout() {
        this.userServe.logout();
        this.router.navigate(['']);
    }

}