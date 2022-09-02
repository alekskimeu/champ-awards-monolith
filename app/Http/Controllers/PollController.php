<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Participant;
use App\Models\Voter;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class PollController extends Controller
{
    public function index() {
        return Inertia::render('Polls', 
        ['participants' => Participant::all(), 'categories' => Category::all()]
        );
    }

    public function vote(Request $request, $id) {
        
        // $this->validate($request, [
        //     'email' => ['required', 'email', Rule::unique('voters', 'email')]
        // ]);

        $participant = Participant::findOrFail($id);

        // Voter::create(["kimeualeks@gmail.com"]);

        $participant->votes += 1;

        $participant->save();

        return back();
    }
}
