import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartComponent } from "./components/cart/cart.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
  { path: "", redirectTo: "product", pathMatch: "full" },
  { path: "product", component: CartComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [CartComponent]
})
export class CartModule {}
