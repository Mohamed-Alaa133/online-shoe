import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { SharedModule } from "../shared/shared.module";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "show", pathMatch: "full" },
  { path: "show", component: HomeComponent }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent]
})
export class HomeModule {}
