import { Component, Input } from "@angular/core";


@Component({
    selector: 'bc-vmessage',
    template: `
    <small class="text-danger d-block">
        {{ text }}
    </small>
    `
})
export class VmessageComponent { 
    @Input() text = '';
}