import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialDesignModule } from '@app-ui/material.design.module';

import { DataModule } from '@app-data/data.module';

import { StoreComponent } from './store.component';
import { CartShortSummaryComponent } from '@app-ui/store/cart/cart-short-summary.component';
import { CartBarComponent } from '@app-ui/store/cart/cart-bar-component';
import { CartComponent } from '@app-ui/store/cart/cart.component';
import { CheckoutComponent } from '@app-ui/store/checkout/checkout.component';
import { DetailComponent } from '@app-ui/store/detail/detail.component';
import { ImageFallbackDirective } from './img.fallback.directive';


@NgModule({
  imports: [
    BrowserModule, RouterModule, FormsModule, MaterialDesignModule, DataModule
  ],
  declarations: [ StoreComponent, CartShortSummaryComponent, CartBarComponent, CartComponent, CheckoutComponent,
  DetailComponent, ImageFallbackDirective ],
  exports: [ StoreComponent, CartComponent, CheckoutComponent, DetailComponent, ImageFallbackDirective ],
  entryComponents: [DetailComponent]
})
export class StoreModule { }
