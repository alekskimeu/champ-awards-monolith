<?php

namespace App\Http\Controllers;

use App\Models\School;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SchoolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render(
            'Schools',
            [
                'schools' => School::all()
            ]
        );
    }

    public function store(Request $request)
    {
        $formData = $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        School::create($formData);

        return Redirect('/schools');
    }

    public function update(Request $request, $id)
    {
        $formData = $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        $school = School::findOrFail($id);

        $school->update($formData);

        return Redirect('/schools');
    }

    public function destroy($id)
    {
        School::findOrFail($id)->delete();
        return back();
    }
}
