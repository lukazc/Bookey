import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { StoreComponent } from '@app-ui/store/store.component';
import { CartComponent } from '@app-ui/store/cart/cart.component';

import { StoreFirstGuard } from '@app/route.guard';
import { ContactComponent } from '@app-ui/misc/contact/contact.component';

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
  { path: "contact",
    component: ContactComponent
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
