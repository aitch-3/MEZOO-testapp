import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { SignupPage } from '../signup/signup.page';
import { FindpwPage } from '../findpw/findpw.page';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    loginData = { email: '', password: '' };
    validation = {
        email: true,
        password: true
    };

    constructor(
        private router: Router,
        public modalCtrl: ModalController,
        public toastCtrl: ToastController
    ) { }

    ngOnInit() { }

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
        // this.router.navigateByUrl('/main/tabs/tab1');
        console.log('---checkpoitn1---');
        console.log(this.loginData);
        if (!this.validateEmail()) {
            this.presentErrorToast('error-email', '이메일을 다시 입력해주세요.');
            this.validation.email = false;
        }
    }


    validateEmail(): boolean {
        const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRe.test(this.loginData.email);
    }

    async presentErrorToast(id: string, message: string) {
        const toast = await this.toastCtrl.create({
            message: message,
            showCloseButton: true,
            position: 'top',
            closeButtonText: '확인',
            id: id
        });
        toast.present();
        toast.onDidDismiss().then(() => {
            this.loginData.email = '';
        });
    }

    dismissErrorToast(id: string) {
        this.toastCtrl.dismiss(null, null, id);
    }


    emailFormFocus() {
        if (!this.validation.email) {
            this.dismissErrorToast('error-email');
        }
    }



}
