import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


import { StoreComponent } from '@app-ui/store/store.component';
import { CartComponent } from '@app-ui/store/cart/cart.component';
import { CheckoutComponent } from '@app-ui/store/checkout/checkout.component';

const appRoutes: Routes = [
  {
    path: "store",
    component: StoreComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent
  },
  {
    path: "**",
    redirectTo: "/store"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
