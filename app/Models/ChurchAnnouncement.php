<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChurchAnnouncement extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'date',
        'image_url',
        'created_by',
    ];

    public function creator()
    {
        return $this->belongsTo(Admin::class, 'created_by');
    }
}
