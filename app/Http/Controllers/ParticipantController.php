<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Event;
use App\Models\Participant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ParticipantController extends Controller
{
    public function index() {
        return Inertia::render('Participants', 
            [
                'participants' => Participant::all(),
                'events' => Event::all(),
                'categories' => Category::all()
            ]);
    }

    public function store(Request $request) {
        $formData = $request->validate([
            'category_id'=> 'required',
            'event_id'=> 'required',
            'firstName'=>'required',
            'lastName'=>'required',
            'age'=>'required',
            'gender'=> 'required',
        ]);

        if($request->hasFile('photo')) {
            $formData['photo'] = $request->file('photo')->store('images', 'public');
        }

        Participant::create($formData);

        return Redirect('/participants');
    }

    public function update(Request $request, $id) {
        $formData = $request->validate([
            'name'=>'required',
            'date'=>'required',
            'description'=>'required',
        ]);

        if($request->hasFile('image')) {
            $formData['image'] = $request->file('image')->store('images', 'public');
        }

        $event = Participant::findOrFail($id);

        $event->update($formData);

        return Redirect('/participants');
    }

    public function destroy($id) {
        Participant::findOrFail($id)->delete();
        return back();  
    }
}
