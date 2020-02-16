import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { LoginGuard } from './core/auth/login.guard';
import { BookFormComponent } from './books/book-form/book-form.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: '',
                component: SigninComponent,
            },
            {
                path: 'signup',
                component: SignupComponent
            }
        ]
    },
    {
        path: '',
        component: MenuComponent,
        children: [
            {
                path: 'user/:username',
                component: BookListComponent,
                // resolve:{ 
                //   photos: PhotoListResolver
                // } 
            },
            {
                path: 'book/add',
                component: BookFormComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'not-found',
                component: NotFoundComponent
            },
            {
                path: '**',
                redirectTo: 'not-found'
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }