<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Berita extends Authenticatable
{
    use HasFactory, HasApiTokens;
    protected $fillable = [
        'judul',
        'deskripsi',
        'image',
    ];
}
