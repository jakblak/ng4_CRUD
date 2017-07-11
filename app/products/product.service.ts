import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCT_ITEMS } from './product-data';
import { findIndex } from 'lodash';

@Injectable()
export class ProductService {
  private pItems = PRODUCT_ITEMS;

  getProductsFromData(): Product[] {
    console.log(this.pItems);
    return this.pItems
  }

  addProduct(product: Product) {
    this.pItems.push(product);
    console.log(this.pItems);
  }

  updateProduct(product: Product) {
    let index = findIndex(this.pItems, (p: Product) => {
      return p.id === product.id;
    });
    this.pItems[index] = product;
  }

  deleteProduct(product: Product) {
    this.pItems.splice(this.pItems.indexOf(product), 1);
    console.log(this.pItems);
  }

}

  // getProductsFromService(): Product[] {
  //   return [{
  //   id: 1,
  //   name: 'Scissors',
  //   description: 'use this to cut stuff',
  //   price: 4.99
  // }, {
  //   id: 2,
  //   name: 'Steak Knives',
  //   description: 'use this to eat food with',
  //   price: 10.99
  // }, {
  //   id: 3,
  //   name: 'Shot Glass',
  //   description: 'use this to take shots',
  //   price: 5.99
  // }]
  // }
