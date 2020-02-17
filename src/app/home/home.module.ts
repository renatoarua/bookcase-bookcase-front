import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignupService } from './signup/signupService';


@NgModule({
    declarations: [
        HomeComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        VmessageModule
    ],
    providers: [
        SignupService
    ]
})
export class HomeModule {}