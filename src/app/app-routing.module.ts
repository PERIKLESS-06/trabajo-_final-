import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlanesComponent } from './components/planes/planes.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
  {path: 'home', component : HomeComponent },
  {path: 'planes', component: PlanesComponent}, 
  {path: 'tienda', component : TiendaComponent },
  {path: 'login', component: LoginComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
