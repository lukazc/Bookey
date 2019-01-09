import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';

import { Product } from '@app-data/product.model';
import { ProductRepository } from '@app-data/product.repo';
import { Cart } from '@app-data/cart/cart.service';
import { Router } from '@angular/router';
import { DetailComponent } from '@app-ui/store/detail/detail.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})

export class StoreComponent implements OnInit {

  observerSubscription: Subscription;
  showFilter: boolean = false;

  private selectedCategories: string[] = [];

  private pageSizeOptions = [8, 16, 32, 64];
  private pageSize = 16;
  private selectedPage = 0;

  private sortOptions: string[] = [
    'Price (low - high)',
    'Title (A - Z)',
    'Title (Z - A)',
    'Price (high - low)'
  ];

  private searchText: string = "";

  constructor(
    private router: Router,
    private _repository: ProductRepository,
    private cart: Cart,
    breakpointObserver: BreakpointObserver,
    private detailDialog: MatDialog) {}

    ngOnInit() {}


    get categories(): string[] {
      return this._repository.getCategories();
    }
    changeCategory(newCategory: string) {
      if (this.selectedCategories.includes(newCategory)) {
        this.selectedCategories.splice(this.selectedCategories.indexOf(newCategory), 1);
      } else {
        this.selectedCategories.push(newCategory);
      }
      this.pageSelect(1);
      this.selectedCategories = this.selectedCategories.slice(0);
    }
    get allProducts(): Product[] {
      return this._repository.getProducts();
    }
    get productsInCategory(): Product[] {
      return this._repository.getProducts(this.selectedCategories);
    }
    get productsInSearchQuery(): Product[] {
      const query = this.searchText.toLowerCase();
      if (!query) { return this.productsInCategory; }
      return this.productsInCategory.filter(product => {
        return (product.title.toLowerCase().includes(query)
        || product.author.toLowerCase().includes(query)
        || product.category.toLowerCase().includes(query));
      });
    }
    get productsOnPage(): Product[] {
      const pageIndex = this.selectedPage * this.pageSize;
      const singlePageOfProducts = this.productsInSearchQuery.slice(pageIndex, pageIndex + this.pageSize);
      return singlePageOfProducts;
    }

    get numberOfPages(): number {
      return Math.ceil
      (this.productsInSearchQuery.length / this.pageSize);
    }
    get arrayOfPages(): Array<number> {
      return Array(this.numberOfPages).fill(null).map((x, i) => i);
    }

    pagePrevious() {
      this.selectedPage--;
      this.scrollToTop();
    }
    pageNext() {
      this.selectedPage++;
      this.scrollToTop();
    }
    pageSelect(pageNumber) {
      this.selectedPage = pageNumber - 1;
      this.scrollToTop();
    }
    pageResize(size) {
      this.pageSize = size;
      this.pageSelect(1);
      this.scrollToTop();
    }

    scrollToTop() {
      document.getElementById('catalog').scrollTop = 0;
    }

    addProductToCart(product: Product) {
      this.cart.addLine(product);
    }

    toggleShowFilter() {
      this.showFilter = !this.showFilter;
    }

    openDetailDialog(product = {}) {
      this.detailDialog.open(DetailComponent, { data: product });
    }

    sortProducts(option: string) {
      switch (option) {
        case 'Price (low - high)':
        this.allProducts.sort(this.sortProductsByPrice);
        break;
        case 'Price (high - low)':
        this.allProducts.sort(this.sortProductsByPrice).reverse();
        break;
        case 'Title (A - Z)':
        this.allProducts.sort(this.sortProductsByTitle);
        break;
        case 'Title (Z - A)':
        this.allProducts.sort(this.sortProductsByTitle).reverse();
        break;
      }
      this.pageSelect(1);
    }
    private sortProductsByPrice(p1, p2) {
      return p1.price - p2.price;
    }
    private sortProductsByTitle(p1, p2) {
      const a = p1.title.toLowerCase();
      const b = p2.title.toLowerCase();
      if (a === b) { return 0; }
      return a < b ? -1 : 1;
    }
  }
