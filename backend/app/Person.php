<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    protected $fillable = ['first_name', 'last_name', 'birth_date', 'gender_id', 'country_id', 'birth_city', 'birth_country_id', 'residence_country_id', 'hometown', 'is_living', 'story', 'photo', 'creator_id'];
    protected $hidden = ['gender_id', 'country_id', 'birth_country_id', 'residence_country_id', 'creator_id', 'created_at', 'updated_at'];

    protected $table = 'persons';

    function gender(){
        return $this->belongsTo('App\Gender', 'gender_id');
    }

    function country(){
        return $this->belongsTo('App\Country', 'country_id');
    }

    function birthCountry(){
        return $this->belongsTo('App\Country', 'birth_country_id');
    }

    function residenceCountry(){
        return $this->belongsTo('App\Country', 'residence_country_id');
    }

    function creator(){
        return $this->belongsTo('App\User', 'creator_id');
    }    

    // function tree(){
    //     return $this->hasOne('App\Tree', 'person_id')->with(['father', 'mother']);
    // }

    // function father(){
    //     return $this->hasOne('App\Tree', 'person_id')->with('father');
    // }

    // function mother(){
    //     return $this->hasOne('App\Tree', 'person_id')->with('mother');
    // }
}
