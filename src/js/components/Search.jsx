import { useState } from "react";
import BookCard from "./BookCard";
import { useDebounce } from "./hooks/useDebounce";

export default function Search() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const debouncedQuery = useDebounce(query, 500);

  const handleSearch = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${debouncedQuery}`
    );
    const data = await res.json();
    setBooks(data.items || []);
    /*await fetch('/api/searches', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ term: query }),
    });*/
  };

  return (
    <>
      <h1 className="mt-4">Bookbuzz</h1>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <form className="flex items-center" onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar libros..."
            className="border border-gray-300 rounded-lg p-2"
          />
          <button type="submit" className="btn btn-dark rounded-lg p-2">
            Search
          </button>
        </form>
        <div className="d-flex flex-row flex-wrap justify-content-center my-4 gap-3">
          {books.length > 0 ? (
            books.map((item) => (
              <BookCard key={item.id} book={item.volumeInfo} />
            ))
          ) : (
            <main className="col-12 col-md-6 p-2">
            <p>
              BookBuzz es un frontend ligero desarrollado con React, Vite y
              Bootstrap que permite a los usuarios buscar libros de manera
              rápida y visual. La aplicación se conecta a la API pública de
              Google Books, mostrando los resultados en tarjetas interactivas.
              </p>
              <p>
              Su diseño modular y basado en componentes React permite una
              experiencia de usuario fluida y escalable, ideal para quienes
              quieren explorar libros de forma intuitiva.
              </p> 
              <p>Si quieres ver el
              código completo, explorar la estructura del proyecto o probarlo
              por tu cuenta, puedes visitar mi repositorio en GitHub
              </p>
              <div className="d-flex gap-3">
              <button><a href="https://github.com/SkynoDore/book-finder/">Repositorio</a></button>
              <button><a href="https://skynodore.github.io/">Mi portafolio</a></button>
              </div>
              
              
            </main>
          )}
        </div>
      </div>
    </>
  );
}
