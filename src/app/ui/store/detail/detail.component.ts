import { Component, Inject } from "@angular/core";

import { Cart } from "@app-data/cart/cart.service";

import { MAT_DIALOG_DATA } from '@angular/material';


@Component({
    templateUrl: 'detail.component.html',
    styleUrls: ['detail.component.scss'],
    selector: 'app-detail'
})
export class DetailComponent {

    title: string;
    author: string;
    description: string;
    category: string;
    price: number;

    cartLine: any;

    constructor(public cart: Cart, @Inject(MAT_DIALOG_DATA) public product: any) {
        this.title = product.title;
        this.author = product.author;
        this.description = product.description;
        this.category = product.category;
        this.price = product.price;

        this.cartLine = cart.lines.find(line => product.id === line.product.id);
    }

    addToCart() {
        this.cart.addLine(this.product, 1);
        this.cartLine = this.cart.lines.find(line => this.product.id === line.product.id);
    }
    increaseQuantity() {
        this.cart.updateQuantity(this.product, this.cartLine.quantity + 1);
    }
    decreaseQuantity() {
        const newQuantity = this.cartLine.quantity - 1;
        this.cart.updateQuantity(this.product, newQuantity);
        if (newQuantity <= 0) {this.cartLine = null;}
    }

}
