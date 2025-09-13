<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Enums\MenuCategory;
use Illuminate\Database\Seeder;
use Database\Factories\CategoryFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (MenuCategory::cases() as $category){
            Category::factory()->create([
                'name' => $category->value,
            ]);
        }
    }
}
