import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";


import { StoreComponent } from '@app-ui/store/store.component';
import { CartComponent } from '@app-ui/store/cart/cart.component';
import { CheckoutComponent } from '@app-ui/store/checkout/checkout.component';

import { StoreFirstGuard } from '@app/route.guard';

const appRoutes: Routes = [
  {
    path: "store",
    component: StoreComponent,
    canActivate: [StoreFirstGuard]
  },
  {
    path: "cart",
    component: CartComponent,
    canActivate: [StoreFirstGuard]
  },
  {
    path: "checkout",
    component: CheckoutComponent,
    canActivate: [StoreFirstGuard]
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
