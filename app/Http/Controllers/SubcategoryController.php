<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Participant;
use App\Models\School;
use App\Models\Subcategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubcategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render(
            'Subcategories',
            [
                'subcategories' => Subcategory::all(),
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

        Subcategory::create($formData);

        return Redirect('/subcategories');
    }

    public function show($id)
    {
        return Inertia::render(
            'Subcategory',
            [
                'subcategory' => Subcategory::findOrFail($id),
                'participants' => Participant::all(),
                'subcategories' => Subcategory::all(),
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

        $subcategory = Subcategory::findOrFail($id);

        $subcategory->update($formData);

        return Redirect('/subcategories');
    }

    public function destroy($id)
    {
        Subcategory::findOrFail($id)->delete();
        return back();
    }
}
