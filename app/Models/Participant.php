<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    use HasFactory;

    protected $table="participants";

    protected $fillable = ['category_id', 'event_id', 'firstName', 'lastName', 'age', 'gender', 'photo'];

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function event() {
        return $this->belongsTo(Event::class);
    }
}
