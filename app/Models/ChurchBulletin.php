<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChurchBulletin extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'file_url',
        'date',
        'created_by',
    ];

    // Relasi ke Admin
    public function creator()
    {
        return $this->belongsTo(Admin::class, 'created_by');
    }

}
