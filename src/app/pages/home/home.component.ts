import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public products: any[] = [];

    constructor(private productService: ProductService) {
        this.productService.GetAllProducts().subscribe({
            next: (response: any) => {
                this.products = response['data'];
            }
        });
    }
}
