import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public products: any[];

    constructor() {
        this.products = ['1', '2', '3'];
    }
}
