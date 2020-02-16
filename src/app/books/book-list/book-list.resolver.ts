import { Injectable } from "@angular/core";
import { BookService } from '../book/book.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../book/book';


@Injectable({
    providedIn: 'root'
})
export class BooklistReolver {
    
    constructor(private bookService: BookService) {}

    // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book[]> {

    //     const userName = route.params.userName;

    //     return this.bookService.listFromUserPginated(userName, 1); 
    // }
}