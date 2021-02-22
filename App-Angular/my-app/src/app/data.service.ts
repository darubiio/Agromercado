import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private PRODUCTOS = "http://localhost:3000/products";

  private USUARIOS = "http://localhost:3000/user";

  constructor(private httpClient: HttpClient) { }

  public getProducts() {
    return this.httpClient.get(this.PRODUCTOS);
  }

  public getUsuarios() {
    return this.httpClient.get(this.USUARIOS);
  }

}
