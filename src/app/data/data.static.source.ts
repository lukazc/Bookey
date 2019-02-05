import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Order } from '@app-data/order.model';
import { Product } from '@app-data/product.model';
import { Feedback } from "./feedback.model";

import * as data from '@app-data/mock/data.js';

@Injectable()
export class DataStaticSource {

    private products: Product[];
    private orders: Order[];
    private feedback: Feedback[];

    constructor() {
        this.products = data().products;
        this.orders = data().orders;
        this.feedback = data().feedback;
    }

    getProducts(): Observable<Product[]> {
        return of(this.products);
    }

    saveOrder(order: Order): Observable<Order> {
        this.orders.push(order);
        return of(order);
    }

    sendFeedback(feedback: Feedback): Observable<Feedback> {
        this.feedback.push(feedback);
        return of(feedback);
    }
}
