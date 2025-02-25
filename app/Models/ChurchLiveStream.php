<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChurchLivestream extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'yt_link',
        'image_url',
        'start_time',
        'created_by',
    ];

    public function creator()
    {
        return $this->belongsTo(Admin::class, 'created_by');
    }
}
