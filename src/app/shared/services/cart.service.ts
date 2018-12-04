import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {
  cart_obj;
  private total = new Subject<any>();

  constructor() {}

  modify(obj) {
    this.cart_obj = JSON.parse(localStorage.getItem("cart"));
    console.log(this.cart_obj);
    if (this.checkInCart(obj.product_id) !== undefined) {
      this.prepaireCart(obj);
    } else {
      this.cart_obj.prods.push(obj);
      localStorage.setItem("cart", JSON.stringify(this.cart_obj));
    }

    this.calculatePriceAndTotalNumber();
  }

  checkInCart(id) {
    return this.cart_obj.prods.filter(p => p.product_id === id)[0];
  }

  prepaireCart(obj) {
    const index = this.cart_obj.prods.findIndex(
      i => i.product_id === obj.product_id
    );
    this.cart_obj.prods.splice(index, 1);
    this.cart_obj.prods.push(obj);
    localStorage.setItem("cart", JSON.stringify(this.cart_obj));
  }

  calculatePriceAndTotalNumber() {
    //  calculate total number of all products
    const totalnumber = this.cart_obj.prods
      .map(e => e.amount)
      .reduce((p, c) => {
        return p + c;
      }, 0);

    this.cart_obj.totalnumber = totalnumber;

    //  calculate total price of all products
    const price = this.cart_obj.prods
      .map(e => {
        const returnObj = { amount: Number, price: Number };
        returnObj.amount = e.amount;
        returnObj.price = e.product_sale_price;
        return returnObj;
      })
      .reduce((p, c) => {
        return p + c.amount * c.price;
      }, 0);

    this.cart_obj.totalPrice = price;
    //  save new obj after calculate price and total product number into cart
    localStorage.setItem("cart", JSON.stringify(this.cart_obj));
    this.total.next(this.cart_obj);
  }

  getTotal$() {
    return this.total.asObservable();
  }

  deleteProduct(id) {
    this.cart_obj = JSON.parse(localStorage.getItem("cart"));
    this.cart_obj.prods.splice(
      this.cart_obj.prods.findIndex(p => p.product_id === id),
      1
    );
    localStorage.setItem("cart", JSON.stringify(this.cart_obj));
    this.calculatePriceAndTotalNumber();
  }
}
