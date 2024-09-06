import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DestinationSearchComponent } from './components/destination-search/destination-search.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { ShimlaComponent } from './shimla/shimla.component';
import { GuwahatiComponent } from './guwahati/guwahati.component';
import { BusinessComponent } from './business/business.component';
import { InformationComponent } from './shimla-information/information.component';
import { Information2Component } from './guwahati-information/information2.component';
import { BookTourComponent } from './components/book-tour/book-tour.component';
import { FormsModule } from '@angular/forms';
import { PackageTourInformationComponent } from './components/package-tour-information/package-tour-information.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DestinationSearchComponent,
    ContactUsComponent,
    AboutComponent,
    ShimlaComponent,
    GuwahatiComponent,
    BusinessComponent,
    InformationComponent,
    Information2Component,
    BookTourComponent,
    PackageTourInformationComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
  // providers: [provideClientHydration()],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
