<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Classes extends Model
{
    protected $fillable = [
        'title',
        'youtube_video_id',
        'description',
        'professor_id'
    ];

    protected $hidden = [
        'professor_id',
    ];

    public function professor() {
        return $this->belongsTo(Professor::class);
    }
}
