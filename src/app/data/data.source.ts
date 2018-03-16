import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Product } from './product.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class DataSource {
    baseUrl: string;

    constructor(private _http: HttpClient) {
        this.baseUrl =  `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        return this.sendRequest('GET', 'products');
    }

    private sendRequest(verb: string, url: string, body?: Product): Observable<any> {
        const finalUrl = this.baseUrl + url;
        return this._http.request(
            verb, finalUrl, {body}
        );
    }
}
