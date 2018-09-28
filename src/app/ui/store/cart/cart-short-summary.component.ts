import { Component } from '@angular/core';

import { Cart } from '@app-data/cart/cart.service';

@Component({
    selector: 'cart-short-summary',
    moduleId: module.id,
    templateUrl: 'cart-short-summary.component.html'
})
export class CartShortSummaryComponent {
    constructor(public cart: Cart) { }
}
