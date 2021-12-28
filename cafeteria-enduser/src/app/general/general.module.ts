import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material.module';
import { ContactsComponent } from './contacts/contacts.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';

@NgModule({
    declarations: [
        AboutComponent,
        ContactsComponent,
    ],
    imports: [
        MaterialModule,
        RouterModule,
        CommonModule,
        SharedModule,
    ],
    exports: [
        AboutComponent,
        ContactsComponent,
    ],
})
export class GeneralModule {}
