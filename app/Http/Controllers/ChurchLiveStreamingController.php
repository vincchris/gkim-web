<?php

namespace App\Http\Controllers;

use App\Models\ChurchLivestream;
use Illuminate\Http\Request;

class ChurchLiveStreamingController extends Controller
{
    public function index(Request $request)
    {
        $query = ChurchLivestream::with('creator');

        // Filter upcoming livestreams
        if ($request->has('upcoming') && $request->upcoming == 'true') {
            $query->where('start_time', '>=', now());
        }

        $livestreams = $query->get();

        // Update image_url untuk full URL
        $livestreams->map(function ($livestream) {
            $livestream->image_url = asset('storage/' . $livestream->image_url);
            return $livestream;
        });

        return response()->json($livestreams);
    }

    public function show($id)
    {
        $livestream = ChurchLivestream::with('creator')->findOrFail($id);

        // Update image_url untuk full URL
        $livestream->image_url = asset('storage/' . $livestream->image_url);

        return response()->json($livestream);
    }
}
