import { HttpService } from "./../../../shared/services/http.service";
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
  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private httpService: HttpService
  ) {
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
    const obj = {
      c: this.userForm.value,
      details: this.cartProducts.prods,
      totalPrice: this.cartProducts.totalPrice
    };

    this.httpService
      .post("http://localhost:63411/api/online/addCustomer", obj)
      .subscribe(
        data => {
          console.log("success add customer", data);
        },
        (error: Response) => {
          console.log("error adding customer ", error);
        }
      );

    const btn = document.getElementById("orderModalCancle");
    btn.click();
  }

  ModifyCart(operation, p) {
    const index = this.cartProducts.prods.findIndex(
      i => i.product_id === p.product_id
    );
    switch (operation) {
      case "add":
        p.amount++;
        this.calculateProductTotalPrice(p, index);
        this.cartService.modify(p);
        break;
      case "sub":
        p.amount--;
        if (p.amount === 0) {
          this.cartProducts.prods.splice(index, 1);
          this.cartService.deleteProduct(p.product_id);
        } else {
          this.calculateProductTotalPrice(p, index);
          this.cartService.modify(p);
        }
        break;

      default:
        break;
    }
  }

  test() {
    this.cartService.getTotal$().subscribe(data => {
      this.total$ = data.totalPrice;
    });

    this.total$ = JSON.parse(localStorage.getItem("cart")).totalPrice;
  }

  calculateProductTotalPrice(product, index) {
    this.cartProducts.prods[index].totalPrice =
      product.amount * product.product_sale_price;
  }

  // checkProductIfExist(product) {
  //   const index = this.cartProducts.prods.findIndex(
  //     i => i.product_id === product.product_id
  //   );

  //   return index < 0 ? false : true;
  // }
}
