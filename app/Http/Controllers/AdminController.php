<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use App\Models\Category;
use App\Models\Event;
use App\Models\Participant;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;

class AdminController extends Controller
{
    public function index() {
        return Inertia::render('Dashboard', 
            [
                'categories' => Category::all(), 
                'participants' => Participant::all(), 
                'events' => Event::all()
            ]);
    }

    public function register(Request $request) {
        $formData = $request->validate([
            'email' => ['required', 'email', Rule::unique('users', 'email')],
            'password' => 'required|confirmed|min:6',
        ]);

        // Hash the password
        $formData['password'] = bcrypt($formData['password']);

        $user = User::create($formData);

        auth()->login($user);
                
        return Redirect('/admin');
    }

    public function authenticate(Request $request) {
        $formData = $request->validate([
            'email' => ['required', 'email'],
            'password' => 'required',
        ]);

        if(auth()->attempt($formData)){
            $request->session()->regenerate();
            return Redirect('/admin');
        }
        return back()->withErrors(['email'=> 'Invalid credentials'])->onlyInput('email');
    }

    public function logout(Request $request) {
        auth()->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return Redirect('/login');
    }
}
