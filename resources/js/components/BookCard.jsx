import React from 'react';
export default function BookCard({ book }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-2" style={{ width: '200px' }}>
            <h2 className="text-lg font-bold">{book.title}</h2>
            <p className="text-gray-600">{book.authors?.join(', ')}</p>
            <p className="text-gray-600">{book.publisher}</p>
            <p className="text-gray-600">{book.publishedDate}</p>
            {book.imageLinks?.thumbnail ? (
                <img src={book.imageLinks.thumbnail} alt={book.title} />
            ) : (
                <div style={{ height: '150px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span>Sin imagen</span>
                </div>
            )}
        </div>
    );
}
