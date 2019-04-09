import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-findpw',
    templateUrl: './findpw.page.html',
    styleUrls: ['./findpw.page.scss'],
})
export class FindpwPage implements OnInit {

    constructor(
        public modalCtrl: ModalController
    ) { }

    ngOnInit() {
    }

    closeModal() {
        this.modalCtrl.dismiss();
    }

    clickFindPW() {
        this.closeModal();
    }

}
