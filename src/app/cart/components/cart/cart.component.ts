import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.sass"]
})
export class CartComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [],
      phone: [],
      address: [],
      city: [],
      governate: []
    });
  }

  ngOnInit() {}

  confirmOrder() {
    console.log("confirm order function", this.userForm.value);
    const btn = document.getElementById("orderModalCancle");
    btn.click();
  }
}
