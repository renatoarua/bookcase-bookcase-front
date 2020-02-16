import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Book } from '../book/book';
import { BookService } from '../book/book.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    templateUrl: 'book-list.component.html'
})
export class BookListComponent implements OnInit {

    constructor(
        private activatedRout: ActivatedRoute,
        private bookService: BookService
    ) { }

    books: Book[] = [];
    username: string = '';
    
    ngOnInit(): void {
        this.activatedRout.params.subscribe(params => {
            this.bookService.listBookFromUser(params.username)
                .subscribe(books => {
                    this.books = books;
                });
        });
    }
}