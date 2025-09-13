<?php

namespace Database\Seeders;

use App\Enums\MenuCategory;
use App\Models\Category;
use App\Models\Menu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = Category::all();

        foreach ($categories as $category){
            Menu::factory(10)->create([
                'category_id' => $category->id
            ]);

        }
    }
}
