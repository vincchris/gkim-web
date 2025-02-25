<?php

namespace App\Http\Controllers;

use App\Models\ChurchAnnouncement;
use Illuminate\Http\Request;

class ChurchAnnouncementController extends Controller
{
    public function index() {
        $query = ChurchAnnouncement::with('creator')->get();

        $query->map(function($query) {
            $query->image_url = asset('storage/' . $query->image_url);
            return $query;
        });

        return response()->json($query);
    }
}
