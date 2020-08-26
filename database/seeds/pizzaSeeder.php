<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class pizzaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i<=10; $i++) {
            DB::table('pizza')->insert([
                'title' => "Пицца".$i,
                'description' => "Описание".$i,
                "price" => rand(1200,2000)
            ]);
        }
    }
}
