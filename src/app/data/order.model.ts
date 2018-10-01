import { Injectable } from "@angular/core";

import { Cart } from "@app-data/cart/cart.service";


@Injectable()
export class Order {

    public id: number;
    public name: string;
    public address: string;
    public city: string;
    public zip: string;
    public country: string;
    public shipped: boolean = false;

    constructor(public cart: Cart) { }

    clear() {
        this.id = null;
        this.name = this.address = this.city = null;
        this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    }

}
