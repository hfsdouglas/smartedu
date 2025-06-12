<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\School>
 */
class SchoolFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $fantasia = fake()->company();
        $razao = $fantasia . " " . fake()->companySuffix();

        return [
            'razao_social' => $razao,
            'fantasia' => $fantasia,
            'cnpj' => fake()->numerify('##############'),
            'phone' => fake()->numerify('###########'),
            'address' => fake()->streetName(),
            'number' =>  fake()->numerify('###'),
            'neighbourhood' => fake()->word(),
            'zip' => fake()->numerify('########'),
            'city' => fake()->city(),
            'state' => strtoupper(fake()->lexify('??')),
        ];
    }
}
