<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

use Illuminate\Database\Eloquent\Model;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;  

    protected $fillable = ['name', 'email', 'password', 'photo', 'role'];    
    protected $hidden = ['password', 'created_at', 'updated_at'];
    
    protected $table = 'users';
    
    function persons(){
        return $this->hasMany('App\Person', 'creator_id');
    }
    
}

