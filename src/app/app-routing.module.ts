import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { Imagenes2dComponent } from "./imagenes2d/imagenes2d.component";



const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'imagenes2d', component: Imagenes2dComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
