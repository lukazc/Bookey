import { Component } from '@angular/core';

import { Cart } from '@app-data/cart/cart.service';

@Component({
    selector: 'cart-bar',
    templateUrl: 'cart-bar-component.html',
    styleUrls: ['cart-bar-component.scss']
})
export class CartBarComponent {
    constructor(public cart: Cart) { }
}
