import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() product: IProduct | null = null;

  constructor() {}

  ngOnInit(): void {}

  public mouseenter(): void {
    if (this.product?.isDisabled === true) {
      return;
    }
    if (this.product) {
      this.product.isHovered = true;
    }
  }

  public mouseleave(): void {
    if (this.product?.isDisabled === true) {
      return;
    }
    if (this.product) {
      this.product.isHovered = false;
    }
  }

  public selectCard(): void {
    if (this.product) {
      this.product.isHovered = false;
      this.product.isSelected = !this.product.isSelected;
    }
  }
}
