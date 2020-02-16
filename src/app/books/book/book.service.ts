import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

import { Book } from './book';

@Injectable({ providedIn: 'root' })
export class BookService {
    constructor(private http: HttpClient) {}

    listBookFromUser(userName: string) {
        return this.http
        .get<Book[]>('http://79d23ef9.ngrok.io/v1/' + 'book/' + userName);
    }

    saveBook(book: Book) {
        return this.http.post('http://79d23ef9.ngrok.io/v1/' + 'book', book);
    }
}