<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChurchBlog extends Model
{
    protected $fillable = [
        'title',
        'content',
        'image_url',
        'created_by',
    ];

    public function creator()
    {
        return $this->belongsTo(Admin::class, 'created_by');
    }
}
