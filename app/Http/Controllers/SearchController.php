<?php
namespace App\Http\Controllers;

use App\Models\Search;
use Illuminate\Http\Request;

class SearchController extends Controller
{
public function store(Request $request)
{
    try {
        $search = Search::create([
            'term' => $request->term,
        ]);
        return response()->json($search, 201);
    } catch (\Exception $e) {
        return response()->json([
            'error' => $e->getMessage(),
            'trace' => $e->getTraceAsString()
        ], 500);
    }
}


    public function index()
    {
        // devolver últimas 10 búsquedas
        $searches = Search::orderBy('created_at', 'desc')->take(10)->get();
        return response()->json($searches);
    }
}
