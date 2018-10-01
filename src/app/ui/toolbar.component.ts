import { Component } from "@angular/core";

import { Cart } from '@app-data/cart/cart.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['toolbar.component.css']
  })

  export class ToolbarComponent {

    constructor(private cart: Cart) {}

  }
