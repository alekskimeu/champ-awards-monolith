<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Event;
use App\Models\Participant;

class EventController extends Controller
{
    public function index() {
        return Inertia::render('Events', 
            [
                'events' => Event::all(),
                'categories' => Category::all(),
                'participants' => Participant::all()
            ]);
    }

    public function store(Request $request) {
        $formData = $request->validate([
            'name'=>'required',
            'date'=> 'required',
            'description'=>'required'
        ]);

        if($request->hasFile('image')) {
            $formData['image'] = $request->file('image')->store('images', 'public');
        }

        Event::create($formData);

        return Redirect('/events');
    }

    public function show($id) {
        return Inertia::render('Event', 
            [
                'participants' => Participant::where('event_id', $id)->get(),
                'events' => Event::all(),
                'categories' => Category::all(),
                'event' => Event::findOrFail($id)
            ]);
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

        $event = Event::findOrFail($id);

        $event->update($formData);

        return Redirect('/events');
    }

    public function destroy($id) {
        Event::findOrFail($id)->delete();
        return back();    
    }
}
