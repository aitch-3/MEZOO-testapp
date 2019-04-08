import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


    overlayRect: any;

    constructor(
        private zone: NgZone
    ) {

    }

    ngOnInit() {
        setTimeout(() => {
            this.calculatePosition();
        }, 100);
    }

    calculatePosition() {
        this.zone.run(() => {
            const el2 = document.getElementsByClassName('form_bg_overlay')[0];
            this.overlayRect = el2.getBoundingClientRect();
        });
    }

}
