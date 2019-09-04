import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule } from 'ngx-materialize';
import { MzNavbarModule } from 'ngx-materialize';
import { MzParallaxModule } from 'ngx-materialize';
import { MzModalModule } from 'ngx-materialize';
import { MzInputModule } from 'ngx-materialize';
import { MzSidenavModule } from 'ngx-materialize';




@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    DonateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzNavbarModule,
    MzParallaxModule,
    MzModalModule,
    MzInputModule,
    MzSidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
