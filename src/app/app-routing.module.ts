import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { Imagenes2dComponent } from "./imagenes2d/imagenes2d.component";
import { Imagenes3dComponent } from "./imagenes3d/imagenes3d.component";



const routes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'imagenes2d', component: Imagenes2dComponent},
  {path: 'imagenes3d', component: Imagenes3dComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
