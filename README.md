📚 BookBuzz

BookBuzz es una pequeña aplicación fullstack construida con Laravel 12, React, Vite y Bootstrap. Permite buscar libros usando la API pública de Google Books, guardar los términos buscados en una base de datos, y mostrar los resultados de forma visual con componentes React.

Tecnologías usadas:

    Laravel 12 (con estructura moderna)

    React 19 + Vite

    Bootstrap 5

    Google Books API

    MySQL/MariaDB (via Eloquent)

    Fetch API

    Estructura de API RESTful
  
Instalación:
1. Clona el repositorio

    git clone https://github.com/tuusuario/bookbuzz.git
    cd bookbuzz

2. Instala dependencias PHP

    composer install

3. Instala dependencias JS (React + Vite)

    npm install

4. Crea el archivo .env

    cp .env.example .env

4.1. Configura tu conexión a base de datos en .env:

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=bookbuzz
    DB_USERNAME=root
    DB_PASSWORD=tu_password

5. Genera la key de Laravel

    php artisan key:generate

6. Correr migraciones

    php artisan migrate

7. Arrancar servidores

    php artisan serve
    npm run dev

🧪 Uso de la app

    Introduce un término en la barra de búsqueda (por ejemplo: "harry potter").

    BookBuzz enviará la búsqueda a la API pública de Google Books.

    Mostrará los resultados en tarjetas.

    Guardará el término buscado en tu base de datos para futuros análisis.

🗃 Estructura de carpetas útil

    resources/
    js/
        app.jsx               ← Punto de entrada React
        components/
        Search.jsx          ← Formulario de búsqueda + lógica
        BookCard.jsx        ← Tarjeta para mostrar libro

    routes/
    web.php                 ← Rutas para vistas
    api.php                 ← Rutas API (searches)

    app/
    Models/
        Search.php            ← Modelo Eloquent
    Http/
        Controllers/
        SearchController.php← Controlador que guarda las búsquedas

🌍 API utilizada
    Google Books API
    Endpoint: https://www.googleapis.com/books/v1/volumes?q=tu_búsqueda
