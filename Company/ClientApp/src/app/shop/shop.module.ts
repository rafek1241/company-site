import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShopListComponent } from "./shop-list/shop-list.component";
import { CartComponent } from "./cart/cart.component";
import { PopularCategoriesComponent } from "./shop-list/popular-categories/popular-categories.component";
import { CategoriesComponent } from "./shop-list/categories/categories.component";
import { ProductsComponent } from "./shop-list/products/products.component";
import { ProductFiltersComponent } from "./shop-list/product-filters/product-filters.component";
import { ProductComponent } from "./shop-list/products/product/product.component";
import { CategoryDetailsComponent } from "./shop-list/categories/category-details/category-details.component";
import { ProductDetailsComponent } from "./shop-list/products/product-details/product-details.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CategoryEntryComponent } from './shop-list/categories/category-entry/category-entry.component';

@NgModule({
  declarations: [
    ShopListComponent,
    CartComponent,
    PopularCategoriesComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductFiltersComponent,
    ProductComponent,
    CategoryDetailsComponent,
    ProductDetailsComponent,
    CategoryEntryComponent
  ],
  imports: [CommonModule, NgbModule]
})
export class ShopModule {}
