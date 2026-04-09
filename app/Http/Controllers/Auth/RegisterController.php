<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/register');
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'tel' => 'numeric|unique:users,tel',
            'password' => 'required'
        ], [
            'name.required'    => 'Le nom est obligatoire.',
            'email.required'   => 'L\'email est obligatoire.',
            'email.email'      => 'L\'adresse email est invalide.',
            'email.unique'     => 'Cet email est déjà utilisé.',
            'tel.numeric'      => 'Le téléphone doit être un nombre.',
            'tel.unique'       => 'Ce numéro est déjà utilisé.',
            'password.required' => 'Le mot de passe est obligatoire.',
        ]);
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'tel' => $request->tel,
            'password' => Hash::make($request->password)
        ]);
        return redirect('/register')->with('success', 'Inscription reussie');
    }
}
