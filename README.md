Para esta clacion de de web Angular hemos usado como referencia la web de una marca de ropa llmada NudeProyect

La pagina original es muy extensa ya que tiene muchos productos por eso la he acortado bastante

Tiene un componete Landing que saldra siempre al inicio cuando nos metamos en la pagina,aqui he usado ngif:
Usamos *ngIf para manejar la visibilidaden la página de inicio, mostramos un botón de "Acceder" inicialmente. Una vez que el usuario hace clic en el botón, se cambia la variable de estado showContent de false a true, lo que permite mostrar el contenido principal.

El uso de ngfor.

usamos *ngFor para mostrar un catálogo de productos. Cada producto tiene propiedades como el título, la imagen, el precio, etc. *ngFor recorre el array catalogItems y genera un bloque de HTML para cada producto.

En este código, por cada elemento en el array catalogItems, se genera un bloque HTML que representa una tarjeta de producto con su respectiva imagen, título y precio.

Crear el Json con la informaciin de los productos
Creacion de un Servicio en Angular
Generamos un servicio usando Angular CLI (ng generate service services/productos) para cargar los datos del JSON mediante HTTP.


Para cargar este JSON desde la carpeta assets, utilizamos el servicio HttpClient. Aquí está el servicio productos.service.ts:
home.component.ts, inyectamos el servicio y usamos sus datos:

el servicio ProductosService está diseñado para obtener los datos de productos desde un archivo JSON externo. Aquí está el flujo básico de cómo funciona este servicio

Servicio (productos.service.ts):

Este servicio tiene un método (obtenerProductos) que usa el HttpClient de Angular para hacer una solicitud HTTP que obtiene los productos desde un archivo JSON.
El servicio se encarga de la lógica de la solicitud HTTP, que es un proceso asíncrono.