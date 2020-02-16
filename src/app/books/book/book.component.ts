import { Component, Input } from '@angular/core';

@Component({
    selector: 'bc-book',
    templateUrl: 'book.component.html',
    styles: [`
    hr.sep-2 {
        border: 0; 
        height: 2px; 
        width: 90%;
        background-image: linear-gradient(to right, #f0f0f0, #e400ff, #d009e8, #f0f0f0);
      }
    `]
})
export class BookComponent {

    @Input() img = '';
    @Input() bookBrief = '';
    @Input() bookAuthor = '';
    @Input() bookTitle = '';
} 