import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { useDebounce } from "./hooks/useDebounce";

export default function Search() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [errorMsg, setError] = useState("");

  const handleSearch = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      if (!res.ok) {
        let message = `Error ${res.status}: ${res.statusText}`;
        if (res.status === 400) {
          message +=
            " — La búsqueda no puede estar vacía o tiene caracteres no válidos.";
        }
        throw new Error(message);
      }
      const data = await res.json();
      setBooks(data.items || []);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h1 className="mt-4">Bookbuzz</h1>
      <div className="d-flex flex-column align-items-center justify-content-center col-12 col-md-6 p-2">
        <form
          className="d-flex items-center flex-wrap w-100 gap-3"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Buscar libros..."
            className="border border-gray-300 rounded-lg p-2 flex-fill"
          />
          <div className="d-flex gap-3">
            <button type="submit" className="btn btn-dark rounded-lg p-2">
              Buscar
            </button>
            <button
              className="btn btn-dark rounded-lg p-2"
              type="button"
              onClick={() => {
                setQuery("");
                setBooks([]);
              }}
            >
              Reiniciar
            </button>
          </div>
        </form>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-center my-4 gap-3">
        {books.length > 0 ? (
          books.map((item) => <BookCard key={item.id} book={item.volumeInfo} />)
        ) : (
          <main className="p-2 col-12 col-md-6">
            {errorMsg && <p className="text-danger">{errorMsg}</p>}
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
            <p>
              Si quieres ver el código completo, explorar la estructura del
              proyecto o probarlo por tu cuenta, puedes visitar mi repositorio
              en GitHub
            </p>
            <div className="d-flex gap-3">
              <button type="button" className="btn btn-dark rounded-lg p-2">
                <a href="https://github.com/SkynoDore/book-finder/">
                  Repositorio
                </a>
              </button>
              <button type="button" className="btn btn-dark rounded-lg p-2">
                <a href="https://skynodore.github.io/">Mi portafolio</a>
              </button>
            </div>
          </main>
        )}
      </div>
    </>
  );
}
