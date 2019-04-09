import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-device-search',
    templateUrl: './device-search.page.html',
    styleUrls: ['./device-search.page.scss'],
})
export class DeviceSearchPage implements OnInit {

    public toggleDeviceTab = true;

    constructor() { }

    ngOnInit() {
    }


    removeTab(ev) {
        ev.preventDefault();


        this.toggleDeviceTab = false;
    }


    clickPairDevice() {

    }

}
