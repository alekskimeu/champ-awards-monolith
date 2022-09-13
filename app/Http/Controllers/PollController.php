<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Participant;
use App\Models\Subcategory;
use App\Models\Voter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

class PollController extends Controller
{
    public function index() {
        return Inertia::render(
            'Polls',
            [
                'participants' => DB::table('participants')->orderBy('votes', 'desc')->get(),
                'categories' => Category::all(),
                'subcategories' => Subcategory::all()
            ]
        );
    }

    public function category($name)
    {
        $category = Category::where('name', $name)->get();
        return Inertia::render(
            'Polls',
            [
                'participants' => Participant::where('category_id', $category[0]->id)->get(),
                'category' => $category, 'categories' => Category::all()
            ]
        );
    }

    // Google Auth Redirect
    public function googleRedirect($id)
    {

        Session::put('id', $id);
        return Socialite::driver('google')->redirect();
    }

    // Google Auth callback
    public function googleCallback(Request $request)
    {
        $id = Session::get('id');

        $email = Socialite::driver('google')->user()->email;

        $voter = Voter::where('email', $email)->get();

        if ($voter->count() > 0) {
            return redirect('/')->with(['message' => 'You already voted!']);
        } else {

            // Store voter email
            $voter = new Voter();
            $voter->email = $email;
            $voter->save();

            // Handle voting
            $participant = Participant::findOrFail($id);
            $participant->votes += 1;
            $participant->save();
            return redirect('/')->with(['message' => 'Voted successfully!']);
        }
    }

}
