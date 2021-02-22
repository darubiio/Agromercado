import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { DetalleComponent } from "./detalle/detalle.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'product', component: MainComponent },
  { path: 'product/:id', component: DetalleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
