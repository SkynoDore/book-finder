<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $guarded = [
        'id', // No need to fill this, it's auto-incremented
        'created_at', // Automatically managed by Laravel
        'updated_at', // Automatically managed by Laravel
    ];
}
