<?php
namespace App\Http\Controllers;

use App\Models\Search;
use Illuminate\Http\Request;
use App\Models\Book;
use Illuminate\Support\Facades\Http;

class SearchController extends Controller
{
public function store(Request $request)
{
    $term = $request->input('term');

    // Validación básica
    if (!$term) {
        return response()->json(['error' => 'No search term provided'], 400);
    }

    // Buscar en la base de datos
    $localBooks = Book::where('title', 'like', "%{$term}%")
                      ->orWhere('authors', 'like', "%{$term}%")
                      ->orWhere('publisher', 'like', "%{$term}%")
                      ->get();

    if ($localBooks->isNotEmpty()) {
        return response()->json([
            'source' => 'local',
            'books' => $localBooks,
        ]);
    }


    // Buscar en Google Books API
    $response = Http::get('https://www.googleapis.com/books/v1/volumes', [
        'q' => $term,
    ]);

       // 1. Guardar la búsqueda si no existe
    if (!Search::where('term', $term)->exists()) {
        Search::create(['term' => $term]);
    }
    if ($response->failed()) {
        return response()->json(['error' => 'Failed to fetch from Google Books API'], 502);
    }

    $data = $response->json();

    // Verificar que 'items' exista y sea un array
    $books = $data['items'] ?? [];

    return response()->json([
        'source' => 'api',
        'books' => $books,
    ]);
}
    public function index()
    {
        // devolver últimas 10 búsquedas
        $searches = Search::orderBy('created_at', 'desc')->take(10)->get();
        return response()->json($searches);
    }
}
