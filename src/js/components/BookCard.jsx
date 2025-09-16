import React from 'react';
export default function BookCard({ book }) {
    return (
        <div className="d-flex flex-column justify-content-between bg-white rounded shadow p-4 col-12 col-md-3 p-2">
            <h2 className="text-lg font-bold">{book.title}</h2>
            <p className="text-gray-600">{book.authors?.join(', ')}</p>
            <p className="text-gray-600">{book.publisher}</p>
            <p className="text-gray-600">{book.publishedDate}</p>
            {book.imageLinks?.thumbnail ? (
                <img src={book.imageLinks.thumbnail} alt={book.title} className='book-thumbnail'/>
            ) : (
                <div style={{ height: '150px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span>Sin imagen</span>
                </div>
            )}
        </div>
    );
}
