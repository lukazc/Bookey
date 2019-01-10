import { Component } from "@angular/core";

import { Cart } from '@app-data/cart/cart.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: 'toolbar.component.html',
    styleUrls: ['toolbar.component.scss']
  })

  export class ToolbarComponent {

    constructor(public cart: Cart) {}

  }
