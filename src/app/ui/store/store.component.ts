import { Component, OnInit } from '@angular/core';

import { Product } from '../../data/product.model';
import { ProductRepository } from '../../data/product.repo';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private _repository: ProductRepository) {
  }
  get products(): Product[] {
    return this._repository.getProducts();
  }
  get categories(): string[] {
    return this._repository.getCategories();
  }


}
