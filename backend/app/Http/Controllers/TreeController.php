<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

use App\Person;
use App\Tree;

class TreeController extends Controller
{
    public function addTree(Request $request){
        $validator = Validator::make($request->all(), [
            'person_id' => 'required|integer|unique:tree',
            'father_id' => 'required|integer',
            'mother_id' => 'required|integer'            
        ]);

        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 400); 
        }

        $response = Tree::create($request->all());
        return response($response, 200);
    }   
    
    public function getTree(Request $request){
        $person = Person::where('id', $request->person_id)->with(['gender', 'country', 'birthCountry', 'residenceCountry'])->first();
        $pfms = $this->recurTreeUp($person);
        $sc = $this->recurTreeDown($person);
        
        $tree = array_merge($pfms, $sc);

        return response($tree, 200);
    }

    public function recurTreeUp($person){
        if(empty($person)) return;

        $father = Tree::where('person_id', $person['id'])->with('father')->first();
        if($father) {
            $father = $father->toArray();
            $father = $father['father'];
        }
        $mother = Tree::where('person_id', $person['id'])->with('mother')->first();
        if($mother) {
            $mother = $mother->toArray();
            $mother = $mother['mother'];
        } 
        
        $siblings = [];
        if(!empty($father) && !empty($mother)){
            $siblings = Tree::where(['father_id'=>$father['id'], 'mother_id'=>$mother['id']])->with('person')->get()->toArray();
            if(!empty($siblings)){
                $tSiblings = [];
                foreach($siblings as $sibling){
                    if($sibling['person']['id'] != $person['id']){
                        array_push($tSiblings, $sibling['person']);
                    }
                }
                $siblings = $tSiblings;
            }
        }
        
        $pfms = []; //person, father, mother, siblings
        $pfms['person'] = $person;
        $pfms['father'] = $this->recurTreeUp($father);
        $pfms['mother'] = $this->recurTreeUp($mother);
        $pfms['siblings'] = $siblings;

        // Log::debug($pfms);
        return $pfms;
    }

    public function recurTreeDown($person){
        if(empty($person)) return;

        $spouse = Tree::where('person_id', $person['id'])->with('spouse')->first();
        if($spouse) {
            $spouse = $spouse->toArray();
            $spouse = $spouse['spouse'];
        }              

        $wife = null; $husband = null;        
        if($person['gender']['name'] == 'Male'){
            $husband = $person;
            $wife = $spouse;
        }
        else if($person['gender']['name'] == 'Female'){
            $husband = $spouse;
            $wife = $person;
        }

        $childs = [];
        if(!empty($husband) && !empty($wife)){
            $childs = Tree::where(['father_id'=>$husband['id'], 'mother_id'=>$wife['id']])->with('person')->get()->toArray();
            if(!empty($childs)){
                $tChilds = [];
                foreach($childs as $child){
                    array_push($tChilds, $child['person']);
                }
                $childs = $tChilds;
            }
        }

        $sc = []; //spouse, childs        
        $sc['spouse'] = $this->recurTreeUp($spouse);
        $nChilds = [];
        foreach($childs as $child){
            $oneChild['person'] = $child;
            $recurSc = $this->recurTreeDown($child);
            
            $oneChild = array_merge($oneChild, $recurSc);
            array_push($nChilds, $oneChild);
        }
        $sc['childs'] = $nChilds;

        return $sc;
    }
}
