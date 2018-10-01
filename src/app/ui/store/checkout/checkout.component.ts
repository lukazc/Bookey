import { Component } from '@angular/core';
import { Order } from '@app-data/order.model';
import { OrderRepository } from '@app-data/order.repo';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.css'],
    selector: 'app-checkout'
})
export class CheckoutComponent {

    submitAttempted: boolean = false;
    orderSent: boolean = false;

    constructor(public repository: OrderRepository, public order: Order) {}

    submitOrder(form: NgForm) {
        this.submitAttempted = true;

        if (form.valid) {
            this.repository
            .saveOrder(this.order)
            .subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitAttempted = false;
            });
        }
    }
}
