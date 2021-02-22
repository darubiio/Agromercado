import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NavBarComponent } from './main/nav-bar/nav-bar.component';
import { NavSearchComponent } from './main/nav-search/nav-search.component';
import { CarritoComponent } from './main/carrito/carrito.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DetalleComponent,
    NavBarComponent,
    NavSearchComponent,
    CarritoComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
