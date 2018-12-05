import { Component } from '@angular/core';

import { Cart } from '@app-data/cart/cart.service';

@Component({
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.component.scss'],
    selector: 'app-cart'
})
export class CartComponent {
    constructor(public cart: Cart) {}
}
