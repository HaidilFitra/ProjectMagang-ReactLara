<?php

namespace App\Http\Controllers\Api;

use App\Models\Berita;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class BeritaController extends Controller
{
    public function index()
    {
        $berita = Berita::get();
        return response()->json($berita);
    }
    

    public function store(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'judul' => 'required',
            'deskripsi'  => 'required',
            'image' => 'required|file|mimes:png,jpg,svg,gif',
        ]);

        if ($validate->fails()) {
            return response()->json([
                'message' => 'Invalid field',
                'errors' => $validate->errors()
            ]);
        } else {
            if ($request->hasFile('image')) {
                $img = $request->file('image');
                $imgName = $img->getClientOriginalName();
                $img->storeAs('images' , $imgName, 'public');
            }

            Berita::create([
                'judul' => $request->judul,
                'deskripsi' => $request->deskripsi,
                'image' => $imgName,
            ]);

            return response()->json(['message' => 'Berita berhasil dibuat']);
        }
    }

    public function show($id)
    {
        $berita = Berita::findOrFail($id);
        return response()->json(['message' => 'Data ditemukan','Data' => $berita]);
    }

    public function update(Request $request,$id)
    {
        $berita = Berita::findOrFail($id);

        $request->validate([
            'judul' => 'required|string',
            'deskripsi' => 'required|string',
            'image' => 'nullable|file|mimes:png,jpg'
        ]);

        $berita->judul = $request->judul;
        $berita->deskripsi = $request->deskripsi;

        if ($request->hasFile('image')) {
            if ($berita->image) {
                Storage::disk('public')->delete('images/' . $berita->image);
            }

            $image = $request->file('image');
            $imgName = $image->getClientOriginalName();
            $image->storeAs('images', $imgName, 'public');
            $berita->image = $imgName;
        }

        $berita->save();

        return response()->json(['message' => 'Berita updated successfully', 'berita' => $berita]);
    }
    

    public function delete($id)
    {
        $berita = Berita::findOrFail($id);

        if($berita->image) {
            Storage::disk('public')->delete('images/', $berita->image);
        }

        $berita->delete();
        return response()->json(['message' => 'delete success']);
    }
}
