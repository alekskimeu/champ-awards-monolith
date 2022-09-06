<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Participant;
use App\Models\Voter;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

class PollController extends Controller
{
    public function index() {
        return Inertia::render('Polls', 
        ['participants' => Participant::all(), 'categories' => Category::all()]
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
    public function googleRedirect()
    {
        
        return Socialite::driver('google')->redirect();
    }

    // Google Auth callback
    public function googleCallback()
    {

        $email = Socialite::driver('google')->user()->email;

        $voter = Voter::where('email', $email)->get();

        if ($voter) {
            return Redirect('/')->withErrors('You already voted!');
        } else {
            // Handle voting
            // $participant = Participant::findOrFail($id);
            // $participant->votes += 1;
            // $participant->save();
            return back();
        }
    }

    // Handle voting
    public function vote(Request $request, $id) {
        
        // $this->validate($request, [
        //     'email' => ['required', 'email', Rule::unique('voters', 'email')]
        // ]);


        // Voter::create(["kimeualeks@gmail.com"]);

        

    }
}
