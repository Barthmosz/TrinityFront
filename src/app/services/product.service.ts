import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private baseUrl = environment.backend;

    constructor(public http: HttpClient) { }

    public GetAllProducts() {
        return this.http.get(`${this.baseUrl}/v1/product`);
    }
}
