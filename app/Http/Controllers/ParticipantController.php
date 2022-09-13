<?php

namespace App\Http\Controllers;

use App\Models\Participant;
use App\Models\School;
use App\Models\Subcategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ParticipantController extends Controller
{
    public function index() {
        return Inertia::render('Participants', 
            [
                'participants' => Participant::all(),
                'subcategories' => Subcategory::all(),
                'schools' => School::all()
            ]);
    }

    public function store(Request $request) {
        $formData = $request->validate([
            'school_id' => 'required',
            'subcategory_id' => 'required',

            'firstName'=>'required',
            'lastName' => 'required',
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
            'school_id' => 'required',
            'subcategory_id' => 'required',

            'firstName' => 'required',
            'lastName' => 'required',
            'gender' => 'required',
        ]);


        if ($request->hasFile('photo')) {
            $formData['photo'] = $request->file('photo')->store('images', 'public');
        }

        $event = Participant::findOrFail($id);

        $event->update($formData);

        return back();
    }

    public function destroy($id) {
        Participant::findOrFail($id)->delete();
        return back();  
    }
}
