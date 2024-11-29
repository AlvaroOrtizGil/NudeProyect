import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { Sudadera1Component } from './sudadera1/sudadera1.component';
import { Sudadera2Component } from './sudadera2/sudadera2.component';
import { Sudadera3Component } from './sudadera3/sudadera3.component';
import { Sudadera4Component } from './sudadera4/sudadera4.component';
const routes: Routes =  [ {path: '', redirectTo: '/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'collections',component:CollectionsComponent},
  {path:'sudadera1',component:Sudadera1Component},
  {path:'sudadera2',component:Sudadera2Component},
  {path:'sudadera3',component:Sudadera3Component},
  {path:'sudadera4',component:Sudadera4Component}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
