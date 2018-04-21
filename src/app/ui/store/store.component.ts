import { Component, OnInit } from '@angular/core';

import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs/Subscription';

import { Product } from '../../data/product.model';
import { ProductRepository } from '../../data/product.repo';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {

  columns: number;
  observerSubscription: Subscription;

  constructor(private _repository: ProductRepository, breakpointObserver: BreakpointObserver) {
    this.observerSubscription = breakpointObserver.observe([Breakpoints.XSmall])
    .subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.columns = 1;
      } else {
        this.columns = 4;
      }
    });
  }
  ngOnInit() {}

  get products(): Product[] {
    return this._repository.getProducts();
  }
  get categories(): string[] {
    return this._repository.getCategories();
  }



}
