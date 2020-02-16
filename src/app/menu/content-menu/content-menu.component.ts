import { Component } from '@angular/core';

@Component({
    selector: 'bc-content-menu',
    template: `
        <ul class="nav flex-column text-center">
            <ng-content></ng-content>
        <ul>
    `
})
export class ContentMenuComponent { }