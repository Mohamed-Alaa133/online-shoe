import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomeModule" },
  {
    path: "single",
    loadChildren: "./single-product/single-product.module#SingleProductModule"
  },
  { path: "cart", loadChildren: "./cart/cart.module#CartModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
