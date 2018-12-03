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
  cartProducts: any;
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
        break;
      case "sub":
        p.amount--;
        break;

      default:
        break;
    }

    this.cartService.modify(p);
  }
}
