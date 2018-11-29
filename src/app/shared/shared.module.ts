import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProductCardComponent } from "./components/product-card/product-card.component";
import { RatingModule } from "ngx-rating";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, RatingModule, ReactiveFormsModule, FormsModule],
  declarations: [HeaderComponent, FooterComponent, ProductCardComponent],
  exports: [HeaderComponent, FooterComponent, ProductCardComponent]
})
export class SharedModule {}
