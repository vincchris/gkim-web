<?php

namespace App\Http\Controllers;

use App\Models\ChurchBulletin;
use Illuminate\Http\Request;

class ChurchBulletinController extends Controller
{
    public function index()
    {
        $bulletins = ChurchBulletin::with('creator')->get();

        // Update file_url untuk full URL
        $bulletins->map(function ($bulletin) {
            $bulletin->file_url = asset('storage/' . $bulletin->file_url);
            return $bulletin;
        });

        return response()->json($bulletins);
    }
}
