<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'file_url', 'date', 'church_bulletin_id'];

    public function churchBulletin()
    {
        return $this->belongsTo(ChurchBulletin::class, 'church_bulletin_id');
    }
}
