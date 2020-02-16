import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signupService';
import { NewUser } from './new-user';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'signup.component.html'
})
export class SignupComponent implements OnInit {

    constructor(
        private formBuilder: FormBuilder,
        private signupService: SignupService,
        private router: Router,
    ) { }

    signupForm: FormGroup;

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({

            userEmail: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            userFullName: ['',
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(30)
                ]
            ],
            userPassword: ['',
                [
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(8)
                ]
            ]
        });

    }

    isFormsValided() {
        if (this.signupForm.valid)
            return true;

        alert('Invalid user name or password!');
        return false;
    }

    signup() {
        if(!this.isFormsValided())
            return;

        const newUser = this.signupForm.getRawValue() as NewUser;

        this.signupService
            .signup(newUser)
            .subscribe(
                () => this.router.navigate(['']),
                err => console.log(err)
            )
    }
}