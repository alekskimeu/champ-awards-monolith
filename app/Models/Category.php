<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table="categories";
    protected $fillable = ['name', 'description'];

    public function participants() {
        return $this->hasMany(Participant::class);
    }

    public function subcategories() {
        return $this->hasMany(Award::class);
    }
}
