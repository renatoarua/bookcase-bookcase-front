import { NgModule } from '@angular/core';
import { BookComponent } from './book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { CommonModule } from '@angular/common';
import { BookFormModule } from './book-form/book-form.module';

@NgModule({
    declarations: [
        BookComponent,
        BookListComponent
    ],
    imports: [
        HttpClientModule ,
        CommonModule,
        BookFormModule
    ],
    exports: [
        BookComponent
    ]
})
export class BooksModule {}