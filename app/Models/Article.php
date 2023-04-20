<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'excerpt', 'body'];
    protected $appends = ['image_url'];

    public function getImageUrlAttribute(): string
    {
        return  asset('images/logo.webp');
    }

}
