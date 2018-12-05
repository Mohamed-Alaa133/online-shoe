import { HttpService } from "./../../services/http.service";
import { CartService } from "./../../services/cart.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.sass"]
})
export class ProductCardComponent implements OnInit {
  rate = 3;
  products;
  filteredProduct = [];
  constructor(
    private router: Router,
    private cartService: CartService,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    const url = "http://localhost:63411/api/Product/getProductsDetails";
    this.httpService.get(url).subscribe(data => {
      console.log(data);
      this.products = data;
      // this.filteredProduct = this.products.fiter();
    });
  }
  goToSingleProduct() {
    console.log("shoiw single product func");
    this.router.navigate(["/single/product", { id: 1 }]);
  }
  addToCart(p) {
    console.log("add to cart", p);
    p.amount = 1;
    p.totalPrice = p.amount * p.product_sale_price;
    this.cartService.modify(p);
  }
}
