import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';

import { SignupPage } from '../signup/signup.page';
import { FindpwPage } from '../findpw/findpw.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [
        HomePage,
        SignupPage,
        FindpwPage
    ],
    entryComponents: [
        SignupPage,
        FindpwPage
    ],
    exports: [
        SignupPage,
        FindpwPage
    ]
})
export class HomePageModule { }
