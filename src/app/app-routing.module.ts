import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShimlaComponent } from './shimla/shimla.component';
import { GuwahatiComponent } from './guwahati/guwahati.component';
import { BusinessComponent } from './business/business.component';
import { InformationComponent } from './shimla-information/information.component';
import { Information2Component } from './guwahati-information/information2.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component:HomeComponent},
  { path: 'about', component:AboutComponent},
  { path: 'shimla', component:ShimlaComponent},
  { path: 'guwahati', component:GuwahatiComponent},
  { path: 'business', component:BusinessComponent},
  { path: 'shimla-information', component:InformationComponent},
  { path: 'guwahati-information', component:Information2Component},

  { path: '**', redirectTo: '/home' } // Catch-all route


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
