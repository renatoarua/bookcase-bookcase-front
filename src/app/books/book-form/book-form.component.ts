import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
import { BookService } from '../book/book.service';
import { group } from '@angular/animations';
import { Book } from '../book/book';


@Component({
    templateUrl: 'book-form.component.html'
})
export class BookFormComponent implements OnInit {

    constructor(
        private formBuilder: FormBuilder,
        private bookService: BookService,
        private router: Router,
        private userService: UserService
    ) { }
    
    bookForm: FormGroup;
    file: File;
    preview: string;

    ngOnInit(): void {
        this.bookForm = this.formBuilder.group({
            bookTitle: [''],
            bookAuthor: [''],
            bookPublished: [''],
            bookPages: [''],
            bookRate: [''],
            bookBrief: [''],
            bookImg64: [this.preview],
        })    
    }

    isFormsValided() {
        if (this.bookForm.valid)
            return true;

        alert('Invalid user name or password!');
        return false;
    }

    saveBook() {
        let newBook = this.bookForm.getRawValue() as Book;
        newBook.userId = this.userService.getUserId();
        newBook.bookImg64 = this.preview;

        this.bookService
            .saveBook(newBook)
            .subscribe(() => {
                this.router.navigate(['/user', this.userService.getUserName()]);
            },
            err => {

            });
    }

    handleFile(file: File) {
        this.file = file;
        const reader = new FileReader(); 
        reader.onload = (event: any) => this.preview = event.target.result;
        reader.readAsDataURL(file);
    }
}