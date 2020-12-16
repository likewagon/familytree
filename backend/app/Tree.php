<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tree extends Model
{
    protected $fillable = ['person_id', 'father_id', 'mother_id', 'spouse_id'];
    protected $hidden = ['id', 'person_id', 'father_id', 'mother_id', 'spouse_id', 'created_at', 'updated_at'];
    
    protected $table = 'tree';

    public function person(){
        return $this->belongsTo('App\Person', 'person_id')->with(['gender', 'country', 'birthCountry', 'residenceCountry']);
    }

    public function father(){
        return $this->belongsTo('App\Person', 'father_id')->with(['gender', 'country', 'birthCountry', 'residenceCountry']);
    }

    public function mother(){
        return $this->belongsTo('App\Person', 'mother_id')->with(['gender', 'country', 'birthCountry', 'residenceCountry']);
    }

    public function spouse(){
        return $this->belongsTo('App\Person', 'spouse_id')->with(['gender', 'country', 'birthCountry', 'residenceCountry']);
    }
}
