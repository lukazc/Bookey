import { Component } from '@angular/core';

import { Cart } from '@app-data/cart/cart.service';

@Component({
    templateUrl: 'cart.component.html',
    styleUrls: ['cart.component.scss'],
    selector: 'app-cart'
})
export class CartComponent {
    constructor(public cart: Cart) {}

    private orderCompleted = false;

    increaseQuantity (line) {
        this.cart.updateQuantity(line.product, line.quantity + 1);
    }
    decreaseQuantity (line) {
        this.cart.updateQuantity(line.product, line.quantity - 1);
    }
}
