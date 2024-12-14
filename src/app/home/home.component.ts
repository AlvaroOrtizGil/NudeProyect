import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Bienvenido a Home';

  catalogItems: any[] = []; // Se inicializa vacío

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    // Cargar productos desde el servicio
    this.productosService.obtenerProductos().subscribe(
      (data) => {
        // Agregar propiedad "imagen" con valor inicial de imagenOriginal
        this.catalogItems = data.map((item: any) => ({
          ...item,
          imagen: item.imagenOriginal,
        }));
      },
      (error) => {
        console.error('Error al cargar los productos:', error);
      }
    );
  }
}
