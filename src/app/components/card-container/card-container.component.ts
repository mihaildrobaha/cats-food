import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IProduct } from '../../../../src/app/interfaces/product-interface';
import { ApiService } from '../../../../src/app/services/api.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss'],
})
export class CardContainerComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  products: Observable<IProduct[]> | null = null;

  ngOnInit(): void {
    this.products = this.apiService.getProducts();
  }
}
