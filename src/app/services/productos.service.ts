import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private url = 'assets/productos.json'; // Ruta del archivo JSON

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<any> {
    return this.http.get(this.url);
  }
}
