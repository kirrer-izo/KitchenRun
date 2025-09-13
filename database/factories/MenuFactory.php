<?php

namespace Database\Factories;

use App\Models\Category;
use FakerRestaurant\Provider\en_US\Restaurant;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Menu>
 */
class MenuFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $this->faker->addProvider(new Restaurant($this->faker));
        return [
            'name' => $this->faker->foodName(),
            'description' => $this->faker->sentence(),
            'is_available' => $this->faker->boolean(),
            'image_path' => $this->faker->imageUrl(),
            'price' => $this->faker->randomFloat(2,5,100),
            'category_id' => Category::inRandomOrder()->first()->id,
        ];
    }
}
