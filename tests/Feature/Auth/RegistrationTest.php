<?php

use App\Models\User;

uses(\Illuminate\Foundation\Testing\RefreshDatabase::class);

test('registration screen can be rendered', function () {
    $response = $this->get('/register');

    $response->assertStatus(200);
});

test('new users can register', function () {
    $response = $this->post('/register', [
        'first_name' => 'Test',
        'last_name' => 'User',
        'username' => 'testuser',
        'email' => 'test@example.com',
        'phone' => '0712345678',
        'address' => 'Nakuru, Kenya',
        'status' => 'active',
        'password' => 'password',
        'role' => 'user',
        'password_confirmation' => 'password',
    ]);
    $user =  User::where('email', 'test@example.com')->first();
    // $this->actingAs($user);
    // $this->assertNotNull($user);
    $this->assertAuthenticatedAs($user);
    // $this->assertAuthenticated($user);
    $response->assertRedirect(route('dashboard'));
});