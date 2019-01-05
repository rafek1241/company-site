import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "./homepage/homepage.component";
import { ServicesComponent } from "./services/services.component";
import { ShopListComponent } from "./shop/shop-list/shop-list.component";
import { ContactComponent } from "./contact/contact/contact.component";
import { CategoriesComponent } from "./shop/shop-list/categories/categories.component";
import { CategoryDetailsComponent } from "./shop/shop-list/categories/category-details/category-details.component";
import { ProductDetailsComponent } from "./shop/shop-list/products/product-details/product-details.component";

const routes: Routes = [
  {
    path: "home",
    component: HomepageComponent
  },
  {
    path: "services",
    component: ServicesComponent
  },
  {
    path: "shop",
    component: ShopListComponent
  },
  {
    path: "shop/category",
    component: CategoriesComponent
  },
  {
    path: "shop/category/{id}",
    component: CategoryDetailsComponent
  },
  {
    path: "shop/product/{id}",
    component: ProductDetailsComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true //for debug purposes
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
