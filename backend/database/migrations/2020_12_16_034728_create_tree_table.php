<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTreeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tree', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('person_id');
            $table->unsignedInteger('father_id')->nullable();
            $table->unsignedInteger('mother_id')->nullable();
            $table->unsignedInteger('spouse_id')->nullable();
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
        Schema::dropIfExists('tree');
    }
}
