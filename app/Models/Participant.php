<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    use HasFactory;

    protected $table="participants";

    protected $fillable = ['subcategory_id', 'school_id', 'firstName', 'lastName', 'gender', 'photo'];

    public function subcategory()
    {
        return $this->belongsTo(Subcategory::class);
    }

    public function school()
    {
        return $this->belongsTo(School::class);
    }

}
