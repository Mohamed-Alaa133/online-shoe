import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SingleComponent } from "./components/single/single.component";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

const routes: Routes = [
  { path: "", redirectTo: "product", pathMatch: "full" },
  { path: "product", component: SingleComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [SingleComponent]
})
export class SingleProductModule {}
