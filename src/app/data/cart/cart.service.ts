// used to gather together the products that the user has selected

import { Injectable } from '@angular/core';

import { Product } from '@app-data/product.model';

@Injectable()
export class Cart {
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;

    addLine(product: Product, quantity: number = 1) {
        const line = this.lines.find(line => line.product.id === product.id);
        if (line !== undefined) {
            line.quantity += quantity;
        } else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }

    updateQuantity(product: Product, newQuantity: number) {
        const line = this.lines.find(line => line.product.id === product.id);
        if (line !== undefined) {
            if (newQuantity <= 0) {
                this.removeLine(product.id);
            } else {
                line.quantity = Number(newQuantity);
            }
        }
        this.recalculate();
    }

    removeLine(id: number) {
        const index = this.lines.findIndex(line => line.product.id === id);
        this.lines.splice(index, 1);
        this.recalculate();
    }

    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(line => {
            this.itemCount += line.quantity;
            this.cartPrice += (line.quantity * line.product.price);
        });

    }
}
export class CartLine {

    constructor(public product: Product,
        public quantity: number) {}
        get lineTotal() {
            return this.quantity * this.product.price;
        }
    }
