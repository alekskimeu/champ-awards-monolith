<?php

namespace App\Http\Controllers;

use App\Models\Award;
use App\Models\Category;
use App\Models\Participant;
use App\Models\School;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AwardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render(
            'Awards',
            [
                'subcategories' => Award::all(),
                'participants' => Participant::all(),
                'categories' => Category::all(),
                'schools' => School::all()
            ]
        );
    }

    public function store(Request $request)
    {
        $formData = $request->validate([
            'name' => 'required',
            'category_id' => 'required',
            'description' => 'required',
        ]);

        Award::create($formData);

        return Redirect('/awards');
    }

    public function show($id)
    {
        return Inertia::render(
            'Award',
            [
                'subcategory' => Award::findOrFail($id),
                'participants' => Participant::all(),
                'subcategories' => Award::all(),
                'categories' => Category::all(),
            ]
        );
    }

    public function update(Request $request, $id)
    {
        $formData = $request->validate([
            'name' => 'required',
            'category_id' => 'required',
            'description' => 'required',
        ]);

        $award = Award::findOrFail($id);

        $award->update($formData);

        return Redirect('/awards');
    }

    public function destroy($id)
    {
        Award::findOrFail($id)->delete();
        return back();
    }
}
