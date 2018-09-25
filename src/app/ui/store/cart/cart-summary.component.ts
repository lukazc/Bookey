import { Component } from '@angular/core';

import { Cart } from '@app-data/cart/cart.service';

@Component({
    selector: 'cart-summary',
    moduleId: module.id,
    templateUrl: 'cart-summary.component.html'
})
export class CartSummaryComponent {
    constructor(public cart: Cart) { }
}
