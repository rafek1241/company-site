import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { ServicesComponent } from "./services/services.component";
import { ShopModule } from "./shop/shop.module";
import { ContactModule } from "./contact/contact.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [AppComponent, HomepageComponent, ServicesComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ShopModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
