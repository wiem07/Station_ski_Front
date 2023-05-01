import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RevenueModule} from "./revenue/revenue.module";
import {RevenueComponent} from "./revenue/revenue.component";
import { ChargeComponent } from './charge/charge.component';
import {RevenueService} from "./services/revenue.service";
import {NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    RevenueModule,

    NgbModalModule,

    NgbModule,


  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,


    ChargeComponent



  ],providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }