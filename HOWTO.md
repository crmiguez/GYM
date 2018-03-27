# OurGym.

OurGym es una aplicación web, multidispositivo y multiplataforma, para la gestión de un gimnasio.

> Desarrollada usando las tecnologías:
> - PHP.
> - CSS.
> - Html5.
> - JavaScript.

## Instalación:

1. Mover el archivo `index.html` y los directorios `front` y `back` a la raiz de apache.
2. Ejecutar el archivo `db.sql` contra mysql.
3. Abrir el navegador en el dominio donde hayamos cargado nuestra aplicación web.
4. Gestionarla a gusto del cliente.

## Explicación estructura.

Dentro de `back` se encuentra el controlador maestro `RequestManager.php` el cual deriva las consultas a las clases expertas ubicadas en la carpeta `Models` con el mismo nombre de fichero que la clase en cuestión.

En `front` nos econtramos dos directorios, que cumplen las siguientes funciones:

- `logic` -> petición y tratado de los datos del backend.
- `statics` -> elementos invariantes como css y animaciones js.

Dentro de `logic` encontraremos un archivo *.js* por cada una de las clases.