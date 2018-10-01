import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { DataSource } from "@app-data/data.source";
import { Order } from "@app-data/order.model";

@Injectable()
export class OrderRepository {

    private orders: Order[] = [];

    constructor(private dataSource: DataSource) {}

    getOrders(): Order[] {
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }
}
