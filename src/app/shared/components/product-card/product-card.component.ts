import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.sass"]
})
export class ProductCardComponent implements OnInit {
  rate = 3;
  constructor(private router: Router) {}

  ngOnInit() {}
  goToSingleProduct() {
    console.log("shoiw single product func");
    this.router.navigate(["/single/product", { id: 1 }]);
  }
  addToCart() {
    console.log("add to cart");
  }
}
