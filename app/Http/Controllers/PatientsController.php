<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientsController extends Controller
{
    public function index(){
        $patients = User::where('role', 'patient')->get();
        return Inertia::render('Patients/index', [
            'patients' => $patients
        ]);
    }
}
