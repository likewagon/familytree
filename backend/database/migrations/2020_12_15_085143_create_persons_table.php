<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('persons', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('last_name');
            $table->date('birth_date');
            $table->unsignedInteger('gender_id');
            $table->unsignedInteger('country_id');
            $table->string('birth_city');
            $table->unsignedInteger('birth_country_id');
            $table->unsignedInteger('residence_country_id');
            $table->string('hometown')->nullable();
            $table->boolean('is_living')->default(true);
            $table->string('story')->nullable();
            $table->string('photo')->nullable();
            $table->unsignedInteger('creator_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('persons');
    }
}
