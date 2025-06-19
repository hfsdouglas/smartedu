<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    protected $fillable = ['bio'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function classes() {
        return $this->hasMany(Classes::class);
    }
}
