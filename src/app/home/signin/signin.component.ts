import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit {
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) { }

    loginForm: FormGroup;

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    isFormsValided() {
        if (this.loginForm.valid)
            return true;
        return false;
    }

    login() {
        if (!this.isFormsValided())
            return;

        const auth = { 
            'username': this.loginForm.get('userName').value, 
            'password': this.loginForm.get('password').value 
        }

        this.authService.authenticate(auth)
            .subscribe(ret => {
                console.log(ret);
                this.router.navigate(['user', this.loginForm.get('userName').value])
            });
    }
}