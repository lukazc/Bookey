import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books$: any;

  constructor (private _http: HttpClient) {
    this.books$ = this._http.get('http://localhost:3500/products');
  }
}
