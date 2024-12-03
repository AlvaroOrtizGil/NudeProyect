import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes =  [ {path: '', redirectTo: '/landing', pathMatch:'full'},
  {path:'landing',component:LandingComponent},
  {path:'home',component:HomeComponent},
  {path:'collections',component:CollectionsComponent},
 


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
