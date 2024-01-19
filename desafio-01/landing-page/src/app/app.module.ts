import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './home/page/page.component';
import { MenuBarComponent } from './home/components/menu-bar/menu-bar.component';
import { InitialWebComponent } from './home/components/initial-web/initial-web.component';
import { SectionSoluctionComponent } from './home/components/section-soluction/section-soluction.component';
import { ButtonComponent } from './home/components/template/button/button.component';
import { SectionClientComponent } from './home/components/section-client/section-client.component';
import { SectionPriceComponent } from './home/components/section-price/section-price.component';
import { PriceComponent } from './home/components/template/price/price.component';
import { SectionContactComponent } from './home/components/section-contact/section-contact.component';
import { SectionFooterComponent } from './home/components/section-footer/section-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PageComponent,
    InitialWebComponent,
    SectionSoluctionComponent,
    ButtonComponent,
    SectionClientComponent,
    SectionPriceComponent,
    PriceComponent,
    SectionContactComponent,
    SectionFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
