import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './models/product.model';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  private nextId: number;

  onNewProduct: EventEmitter<Product> = new EventEmitter<Product>();

  private dataFromServer = [
    {
      id: 1,
      name: 'Laptop',
      departmentId: 4,
      price: 1200,
      description: 'Macbook Pro',
    },
    {
      id: 2,
      name: 'Laptop',
      departmentId: 4,
      price: 2200,
      description: 'Macbook Retina',
    },
    {
      id: 3,
      name: 'Laptop',
      departmentId: 4,
      price: 600,
      description: 'Macbook Badge',
    },
    {
      id: 4,
      name: 'Laptop',
      departmentId: 4,
      price: 1000,
      description: 'Macbook Ruins',
    },
  ];

  constructor(private departmentService: DepartmentService) {
    for (const product of this.dataFromServer) {
      this.products.push({
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        department: this.departmentService.getDepartmentById(product.id),
      });
      this.nextId = product.id + 1;
    }
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    const newProduct: Product = { id: this.nextId++, ...product };
    this.products.push(newProduct);
    this.onNewProduct.emit(newProduct);

    console.log(this.products);
  }
}
