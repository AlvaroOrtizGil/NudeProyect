import { Component } from '@angular/core';

@Component({
  selector: 'app-home', // Nombre único para el selector del componente
  templateUrl: './home.component.html', // Ruta del archivo HTML del componente
  styleUrls: ['./home.component.scss'], // Ruta del archivo CSS del componente
})
export class HomeComponent {
  // Puedes agregar cualquier lógica o propiedades que necesites para el componente
  title = 'Bienvenido a Home';
  
  catalogItems = [
    {
      titulo: 'Sudadera Cherry Negra Ash',
      imagen: '../../assets/imagenes/sudadera1.jpg', // Imagen inicial
      imagenOriginal: '../../assets/imagenes/sudadera1.jpg', // Imagen original para restaurar
      precio: '$49.99',
      hoverImagen: 'https://nude-project.com/cdn/shop/files/IMG_1508_model_315x.png?v=1716970946',
    },
    {
      titulo: 'Sudadera Boxy Gris Kory',
      imagen: '../../assets/imagenes/sudadera22.jpg',
      imagenOriginal: '../../assets/imagenes/sudadera22.jpg',
      precio: '$59.99',
      hoverImagen: 'https://nude-project.com/cdn/shop/files/IMG_1168.jpg?v=1732213592',
    },
    {
      titulo: 'Sudadera Boxy Marshmallow Kory',
      imagen: '../../assets/imagenes/sudadera33.jpg',
      imagenOriginal: '../../assets/imagenes/sudadera33.jpg',
      precio: '$69.99',
      hoverImagen: 'https://nude-project.com/cdn/shop/files/KORY_HOOD_MARSHMALLOW_fake_front_220d21ee-8f29-49a3-a028-1c5f82edecd1_315x.jpg?v=1724315513',
    },
    {
      titulo: 'Sudadera Ash La Monnaie',
      imagen: '../../assets/imagenes/sudadera4.jpg',
      imagenOriginal: '../../assets/imagenes/sudadera4.jpg',
      precio: '$79.99',
      hoverImagen: 'https://nude-project.com/cdn/shop/files/IMG_1990.jpg?v=1727467144',
    },
  ];
  
}
