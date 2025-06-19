<?php

namespace Database\Seeders;

use App\Models\Area;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user1 = User::factory()->create([
            'name' => 'Douglas',
            'email' => 'douglas@email.com',
            'foto' => 'https://github.com/hfsdouglas.png'
        ]);
        
        User::factory(4)->create();

        $user1->professor()->create([
            'bio' => 'Professor de Matemática com 10 anos de experiência.',
        ]);
    }
}
