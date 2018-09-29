import { Component } from '@angular/core';

import { Cart } from '@app-data/cart/cart.service';

@Component({
    templateUrl: 'cart.component.html',
    selector: 'app-cart'
})
export class CartComponent {
    constructor(public cart: Cart) {}
}
