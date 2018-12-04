import { CartService } from "./../../../shared/services/cart.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.sass"]
})
export class CartComponent implements OnInit {
  userForm: FormGroup;
  productAmount = 1;
  cartProducts;
  prods: any;
  total$: any;
  productPrice: any;
  constructor(private fb: FormBuilder, private cartService: CartService) {
    this.userForm = this.fb.group({
      name: [],
      phone: [],
      address: [],
      city: [],
      governate: []
    });
  }

  ngOnInit() {
    this.cartProducts = JSON.parse(localStorage.getItem("cart"));
    this.test();
  }

  confirmOrder() {
    console.log("confirm order function", this.userForm.value);
    const btn = document.getElementById("orderModalCancle");
    btn.click();
  }

  ModifyCart(operation, p) {
    switch (operation) {
      case "add":
        p.amount++;
        this.cartService.modify(p);
        break;
      case "sub":
        p.amount--;
        if (p.amount === 0) {
          const index = this.cartProducts.prods.findIndex(
            i => i.product_id === p.product_id
          );
          this.cartProducts.prods.splice(index, 1);
          this.cartService.deleteProduct(p.product_id);
        } else {
          this.cartService.modify(p);
        }
        break;

      default:
        break;
    }
    // this.calculateProductTotalPrice(p);
  }

  test() {
    this.cartService.getTotal$().subscribe(data => {
      this.total$ = data.totalPrice;
    });

    this.total$ = JSON.parse(localStorage.getItem("cart")).totalPrice;
  }

  calculateProductTotalPrice(product) {
    const totalPrice = product.amount * product.product_sale_price;
    const newPrice = {};
    // if (this.checkProductIfExist(product)) {
    //   this.prices[product.product_id] = totalPrice;
    // } else {

    // }
    // let priceObject = {};
    // priceObject[product.product_id] = totalPrice;
    // console.log(priceObject);
    // return priceObject;
  }

  checkProductIfExist(product) {
    const index = this.cartProducts.prods.findIndex(
      i => i.product_id === product.product_id
    );

    return index < 0 ? false : true;
  }
}
