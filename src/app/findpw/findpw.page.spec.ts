import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindpwPage } from './findpw.page';

describe('FindpwPage', () => {
    let component: FindpwPage;
    let fixture: ComponentFixture<FindpwPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FindpwPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FindpwPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
