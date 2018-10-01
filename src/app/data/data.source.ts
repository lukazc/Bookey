import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Order } from '@app-data/order.model';
import { Product } from '@app-data/product.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class DataSource {
    baseUrl: string;

    constructor(private _http: HttpClient) {
        this.baseUrl =  `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        const url = this.baseUrl + 'products';
        return this._http.get<Product[]>(url);
    }

    saveOrder(order: Order): Observable<Order> {
        const url = this.baseUrl + 'orders';
        return this._http.post<Order>(url, order);
    }
}
