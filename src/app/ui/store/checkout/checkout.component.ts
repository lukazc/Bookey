import { Component, Output, EventEmitter } from '@angular/core';
import { Order } from '@app-data/order.model';
import { OrderRepository } from '@app-data/order.repo';
import { NgForm } from '@angular/forms';

@Component({
    templateUrl: 'checkout.component.html',
    styleUrls: ['checkout.component.scss'],
    selector: 'app-checkout'
})
export class CheckoutComponent {

    @Output() validSubmission = new EventEmitter();

    submitAttempted: boolean = false;
    orderSent: boolean = false;

    constructor(public repository: OrderRepository, public order: Order) {}

    submitOrder(form: NgForm) {
        this.submitAttempted = true;

        if (form.valid) {
            // Notify parent component of a valid submission
            this.validSubmission.emit();
            // Save the order on server, and delete it locally
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
