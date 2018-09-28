import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MaterialDesignModule } from '@app-ui/material.design.module';

import { DataModule } from '@app-data/data.module';

import { StoreComponent } from './store.component';
import { CartShortSummaryComponent } from '@app-ui/store/cart/cart-short-summary.component';
import { CartComponent } from '@app-ui/store/cart/cart.component';
import { CheckoutComponent } from '@app-ui/store/checkout/checkout.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule, MaterialDesignModule, DataModule
  ],
  declarations: [ StoreComponent, CartShortSummaryComponent, CartComponent, CheckoutComponent ],
  exports: [ StoreComponent, CartComponent, CheckoutComponent ]
})
export class StoreModule { }
