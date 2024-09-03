<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validate = Validator::make($request->all(),[
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validate->fails()) {
            return response()->json([
                'message' => 'Invalid field',
                'errors' => $validate->errors()
            ]);
        }else{

          $user =   User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $token = $user->createToken('apitoken')->plainTextToken;

            return response()->json([
                'message' => 'register success',
                'token' => $token
            ]);
        }
    }

    public function login(Request $request)
    {
        $credential = $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

        if(Auth::attempt($credential)) {
            return response()->json([
                'message' => 'Login success',
                'token' => Auth::user()->createToken('api-token')->plainTextToken,
            ]);
        }
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            'message' => 'Logout success'
        ]);
    }
}
