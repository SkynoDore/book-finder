import React, { useState } from 'react';
import BookCard from "./BookCard";

export default function Search() {
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const data = await res.json();
        setBooks(data.items || []);
    await fetch('/api/searches', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ term: query }),
    });
    };

    return (
        <>
        <h1 className='text-primary'>Bookbuzz</h1>
        <div className="d-flex p-4 rounded shadow-lg flex-column align-items-center justify-content-center">
            <form className="flex items-center" onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar libros..."
                    className="border border-gray-300 rounded-lg p-2"
                />
                <button
                    type="submit"
                    className="bg-primary text-white rounded-lg p-2"
                >
                    Search
                </button>
            </form>

            <div className="d-flex flex-wrap">
                {books.map(item => (
                    <BookCard
                        key={item.id}
                        book={item.volumeInfo}
                    />
                ))}
            </div>
        </div>
        </>
    );
}
