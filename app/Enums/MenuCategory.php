<?php

namespace App\Enums;

enum MenuCategory: string
{
    case BREAKFAST = 'breakfast';
    case LUNCH = 'lunch';
    case DINNER = 'dinner';
    case APPETIZERS = 'appetizers';
    case MAIN_COURSES = 'main_courses';
    case SIDE_DISHES = 'side_dishes';
    case SOUPS = 'soups';
    case SALADS = 'salads';
    case SANDWICHES = 'sandwiches';
    case PIZZA = 'pizza';
    case PASTA = 'pasta';
    case GRILLED = 'grilled';
    case SEA_FOOD = 'sea_food';
    case VEGETARIAN = 'vegetarian';
    case KIDS = 'kids';
    case DESSERTS = 'desserts';
    case BEVERAGES = 'beverages';
}
