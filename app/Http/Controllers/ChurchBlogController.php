<?php

namespace App\Http\Controllers;

use App\Models\ChurchBlog;
use Illuminate\Http\Request;

class ChurchBlogController extends Controller
{
    public function index() {
        $query = ChurchBlog::with('creator')->get();

        $query->map(function($query) {
            $query->image_url = asset('storage/' . $query->image_url);
            return $query;
        });

        return response()->json($query);
    }
}
