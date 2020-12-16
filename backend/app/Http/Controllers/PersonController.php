<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

use App\Person;

class PersonController extends Controller
{
    public function addPerson(Request $request){
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'birth_date' => 'required|date',
            'gender_id' => 'required|integer',
            'country_id' => 'required|integer',
            'birth_city' => 'required|string',
            'birth_country_id' => 'required|integer',
            'residence_country_id' => 'required|integer',
            'hometown' => 'string|nullable',
            'is_living' => 'boolean',
            'story' => 'string|nullable|max:500',
            'photo' => 'string|nullable',
            'creator_id' => 'integer|nullable'
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 400); 
        }

        $response = Person::create($request->all());
        return response($response, 200);
    }

    public function getPerson(Request $request){
        $response = Person::where('id', $request->person_id)->with(['gender', 'country', 'birthCountry', 'residenceCountry', 'creator'])->get();
        return response($response, 200);
    }

    public function updatePerson(Request $request){
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'birth_date' => 'required|date',
            'gender_id' => 'required|integer',
            'country_id' => 'required|integer',
            'birth_city' => 'required|string',
            'birth_country_id' => 'required|integer',
            'residence_country_id' => 'required|integer',
            'hometown' => 'string|nullable',
            'is_living' => 'boolean',
            'story' => 'string|nullable',
            'photo' => 'string|nullable',
            'creator_id' => 'integer|nullable'
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 400); 
        }

        $person = Person::find($request->id);

        $person->first_name = $request->first_name;
        $person->last_name = $request->last_name;
        $person->birth_date = $request->birth_date;
        $person->gender_id = $request->gender_id;
        $person->country_id = $request->country_id;
        $person->birth_city = $request->birth_city;
        $person->birth_country_id = $request->birth_country_id;
        $person->residence_country_id = $request->residence_country_id;
        $person->hometown = $request->hometown;
        $person->is_living = $request->is_living;
        $person->story = $request->story;
        $person->photo = $request->photo;
        $person->creator_id = $request->creator_id;

        $response = $person->save();

        return response($response, 200);
    }

    public function deletePerson(Request $request){
        $response = Person::destroy($request->person_id);
        return response($response, 200);
    }
}
