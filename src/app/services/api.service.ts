import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product-interface';
import { Observable, of } from 'rxjs';
import { productData } from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private data: IProduct[] = productData;

  constructor() {}

  private products$: Observable<IProduct[]> = of(this.data);

  public getProducts(): Observable<IProduct[]> {
    return this.products$;
  }
}
