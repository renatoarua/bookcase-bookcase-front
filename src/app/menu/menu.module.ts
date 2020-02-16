import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { CoreModule } from '../core/core.module';
import { ErrorsModule } from '../errors/errors.module';
import { BooksModule } from '../books/books.module';
import { MaterialModule } from '../material/material.module';
import { ContentMenuComponent } from './content-menu/content-menu.component';
import { BtnMenuConponent } from './btn-menu/btn-menu.component';



@NgModule({
    declarations: [ 
        MenuComponent,
        ContentMenuComponent,
        BtnMenuConponent
    ],
    imports: [
        CommonModule,
        BooksModule,
        ErrorsModule,
        CoreModule,
        RouterModule,
        MaterialModule
    ],
    providers: [
        
    ]
})
export class MenuModule {}