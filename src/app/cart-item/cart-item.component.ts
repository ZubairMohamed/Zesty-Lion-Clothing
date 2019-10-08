import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input('quantity') quantity: number;
  @Input('size') size: string;

  constructor() {}

  ngOnInit() {}
}
