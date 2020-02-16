import { NgModule } from "@angular/core";
import { BookFormComponent } from './book-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { VmessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        BookFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VmessageModule,
        FormsModule,
        RouterModule,
    ]
})
export class BookFormModule {}