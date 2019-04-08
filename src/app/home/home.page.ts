import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


    overlayRect: any;

    constructor(
        public modalCtrl: ModalController
    ) {}

    ngOnInit() {}

    async openSignupModal() {
        const modal = await this.modalCtrl.create({
            component: SignupPage
        });
        return await modal.present();
    }



}
