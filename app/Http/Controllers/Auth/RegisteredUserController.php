<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create(): Response
    {
        return Inertia::render('auth/register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->merge([
            'status' => $request->input('status', 'active'),
            'role' => $request->input('role', 'customer')
        ]);
       $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'username' => ['required', 'string', 'max:255', Rule::unique('users','username')->whereNull('deleted_at')],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique('users','email')->whereNull('deleted_at')],
            'phone' => ['required', 'string', 'max:20'],
            'address' => ['nullable', 'string', 'max:255'],
            'status' => ['in:active,inactive'],
            'role' => ['required', 'string', 'in:customer,admin,manager,driver,kitchen'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'username' => $request->username,
            'email' => strtolower($request->email),
            'phone' => $request->phone,
            'address' => $request->address,
            'status' => $request->status,
            'role' => $request->role,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);
        
        // if(Auth::user()->role === 'manager'){
        //     return redirect()->route('dashboard');
        // }elseif(Auth::user()->role === 'customer'){
        //     return redirect()->route('customer.dashboard');
        //     // dd('Cant find route');
        // }elseif(Auth::user()->role === 'driver'){
        //     return redirect()->route('driver.dashboard');
        // }elseif(Auth::user()->role === 'kitchen'){
        //     return redirect()->route('kitchen.dashboard');
        // }else{
            
        //     dd('Role not defined');
        // }
        return redirect(Auth::user()->redirectToDashboard());

    }
}
