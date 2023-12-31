import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product: Product | undefined;
  @Output() selectedProduct = new EventEmitter<Product>();

  public notify(product: Product): void {
    if (!product) return;

    this.selectedProduct.emit(product);
  }

}
