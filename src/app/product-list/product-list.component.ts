import { Component } from '@angular/core';
import { Product } from '../product';
import { products } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  public products: Product[] = [...products];

  share() {
    window.alert('The product has been shared!');
  }
  onNotify(product: Product) {
    const alertMsg = 'You will be notified when the product goes on sale, product name: ';
    window.alert(alertMsg + product.name);
  }

}
