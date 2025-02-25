<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'username',
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
    ];

    public function announcements()
    {
        return $this->hasMany(ChurchAnnouncement::class, 'created_by');
    }

    public function blogs()
    {
        return $this->hasMany(ChurchBlog::class, 'created_by');
    }

    public function livestreams()
    {
        return $this->hasMany(ChurchLivestream::class, 'created_by');
    }

    public function churchbulletin()
    {
        return $this->hasMany(ChurchBulletin::class, 'created_by');
    }
}
