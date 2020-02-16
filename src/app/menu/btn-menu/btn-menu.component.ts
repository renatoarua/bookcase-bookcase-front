import { Component, Input } from '@angular/core';

@Component({
    selector: 'bc-btn-menu',
    template: `
        <li class="nav-item">
            <a class="nav-link" [routerLink]="link">
                <div>
                    <span>
                        <i [class]="classIcon"></i>
                    </span>
                </div>
                <span>{{ name }}</span>
            </a>
        </li>
    `
})
export class BtnMenuConponent {

    @Input() name: string;
    @Input() link: string; 
    @Input() classIcon: string; 
}