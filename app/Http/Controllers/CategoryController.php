<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index() {
        return Inertia::render('Categories', 
            [
                'categories' => Category::all()
            ]);
    }

    public function store(Request $request) {
        $formData = $request->validate([
            'name'=>'required',
            'description'=>'required',
        ]);

        Category::create($formData);

        return Redirect('/categories');
    }

    public function update(Request $request, $id) {
        $formData = $request->validate([
            'name'=>'required',
            'description'=>'required',
        ]);

        $category = Category::findOrFail($id);

        $category->update($formData);

        return Redirect('/categories');
    }

    public function destroy($id) {
        Category::findOrFail($id)->delete();
        return back();    
    }
}
