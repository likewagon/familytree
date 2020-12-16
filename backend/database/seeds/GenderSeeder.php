<?php

use Illuminate\Database\Seeder;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('genders')->delete();

        $genders = array(
            array('name' => 'Male'),
            array('name' => 'Female'),
            array('name' => 'Other')
        );

        DB::table('genders')->insert($genders);
    }
}
