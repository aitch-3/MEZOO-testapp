import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { SignupPage } from '../signup/signup.page';
import { FindpwPage } from '../findpw/findpw.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


    overlayRect: any;

    constructor(
        private router: Router,
        public modalCtrl: ModalController
    ) {}

    ngOnInit() {}

    async openSignupModal() {
        const modal = await this.modalCtrl.create({
            component: SignupPage
        });
        return await modal.present();
    }

    async openFindPasswordModal() {
        const modal = await this.modalCtrl.create({
            component: FindpwPage
        });
        return await modal.present();
    }

    clickLogin() {
        this.router.navigateByUrl('/main/tabs/tab1');
    }



}
