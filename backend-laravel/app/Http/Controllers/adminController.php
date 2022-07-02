<?php

namespace App\Http\Controllers;

use Auth;
use Validator;
use App\Models\House;
use App\Models\Collection;
use Illuminate\Http\Request;

class adminController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials))
        {
            return $request->only('email');
        }
        else
        {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
    
    public function getHouses(){

        $houses = House::all();

        if($houses->isEmpty()){
            return response()->json(['data' => 'Not Found!'], 404);
        }
        return response()->json([
            "status" => "Success",
            "houses" => $houses
        ], 200);
    }
    
    public function getCollections(){

        $collection = Collection::all();

        if($collection->isEmpty()){
            return response()->json(['data' => 'Not Found!'], 404);
        }
        return response()->json([
            "status" => "Success",
            "collection" => $collection
        ], 200);
    }

    public function addHouse(Request $request)
    {
        $house = new House;
        $house->image = $request->image;
        $house->description = $request->description;
        $house->location = $request->location;   //??
        $house->rate = 0; // if 0 then in frontend make it "new"
        $house->ppn = $request->ppn; // price per night
        $house->collection_id = $request->collection_id;
        $house->save();

        return response()->json([
            "status" => "Success"
        ], 200);
    }

    public function addCollection(Request $request)
    {
        $collection = new Collection;
        $collection->icon = $request->icon;
        $collection->collection_name = $request->collection_name;
        $collection->save();

        return response()->json([
            "status" => "Success"
        ], 200);
    }
}
