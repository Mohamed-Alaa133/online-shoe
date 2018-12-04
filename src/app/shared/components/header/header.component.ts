import { CartService } from "./../../services/cart.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {
  cart: { prods: any[]; totalnumber: number; totalPrice: number };
  total$: any;

  constructor(private cartService: CartService) {
    if (!localStorage.getItem("cart")) {
      const cart = {
        prods: [],
        totalnumber: 0,
        totalPrice: 0
      };
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      this.test();
      this.total$ = JSON.parse(localStorage.getItem("cart")).totalnumber;
    }
  }

  ngOnInit() {}

  test() {
    this.cartService.getTotal$().subscribe(data => {
      this.total$ = data.totalnumber;
    });

    this.total$ = JSON.parse(localStorage.getItem("cart")).totalnumber;
  }
}
