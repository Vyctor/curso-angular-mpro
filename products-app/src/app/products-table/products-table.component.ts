import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
})
export class ProductsTableComponent implements OnInit {
  @ViewChild(MatTable) dataTable: MatTable<any>;

  products: Product[];
  productColumns = ['id', 'name', 'price', 'description', 'department'];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productService.onNewProduct.subscribe((product: Product) =>
      this.dataTable.renderRows()
    );
  }
}
