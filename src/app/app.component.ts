import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'zesty-lion-clothing';

  // initalizing variables
  sizeSelected = null;
  smallItems: any = 0;
  mediumItems: any = 0;
  largeItems: any = 0;
  cartItems: any = 0;

  ngOnInit() {
    // when the application is ready call populate cart
    this.populateCart();
  }

  ngAfterViewInit() {}

  // S M L button click event so that the current selected size is known to our app
  public setSize(buttonClicked) {
    this.sizeSelected = buttonClicked;
  }

  // event handler for add to cart
  private addToCart() {
    //Alert if the size is not selected
    if (this.sizeSelected == null) {
      alert('Please select a size first.');
    } else {
      //the t shirt with this size has not been added to the cart
      if (localStorage.getItem(this.sizeSelected) == null) {
        localStorage.setItem(this.sizeSelected, '1');

        //t shirt exists already
      } else {
        let numberInCart = localStorage.getItem(this.sizeSelected);
        let number = 0;
        try {
          number = parseInt(numberInCart);
          number = number + 1;
        } catch {
          //do nothing
        }

        localStorage.setItem(this.sizeSelected, number.toString());

        this.sizeSelected = null;

        alert('Added item to cart.');
        this.populateCart();
      }
    }
  }

  // this method deals with showing the user what items are in the cart
  private showCartItems() {
    let small = parseInt(this.smallItems);
    let medium = parseInt(this.mediumItems);
    let large = parseInt(this.largeItems);

    if (small != 0) {
    }

    if (medium != 0) {
    }

    if (large != 0) {
    }
  }

  // this method populates the number of items in each variable
  private populateCart() {
    //get number of items in cart for each size
    if (localStorage.getItem('S') != null) {
      this.smallItems = localStorage.getItem('S');
      try {
        this.smallItems = parseInt(this.smallItems);
      } catch {
        //do nothing
      }
    }

    if (localStorage.getItem('M') != null) {
      this.mediumItems = localStorage.getItem('M');
      try {
        this.mediumItems = parseInt(this.mediumItems);
      } catch {
        //do nothing
      }
    }

    if (localStorage.getItem('L') != null) {
      this.largeItems = localStorage.getItem('L');
      try {
        this.largeItems = parseInt(this.largeItems);
      } catch {
        //do nothing
      }
    }

    this.recalculate();
  }

  // this recalculates the number of items of different size in each variable
  private recalculate() {
    let total = this.smallItems + this.mediumItems + this.largeItems;
    if (isNaN(total)) {
      this.cartItems = 0;
    } else {
      this.cartItems = total;
    }

    this.showCartItems();
    return total;
  }
}
