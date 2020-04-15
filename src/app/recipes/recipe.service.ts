import { Ingredient } from './shared/ingredient.model';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Fruit', 'Fruit Salad', FRUIT, [new Ingredient('Apple', 3), new Ingredient('Banans', 4)]),
    new Recipe('Baguette', 'Italic Bread', BAGUETTE, [new Ingredient('Water', 100), new Ingredient('Italian', 1)]),
    new Recipe('Pasta', 'With Salad', PASTA, [new Ingredient('Vegetables', 3), new Ingredient('Pasta', 1)]),
    new Recipe('Soup', 'Tasty & Hot', SOUP, [new Ingredient('Water', 3), new Ingredient('Taste', 1)]),
    new Recipe('Pie', 'Pretty & Attractive', PIE, [new Ingredient('Power', 10), new Ingredient('Fork', 1)]),
    new Recipe('Popsicle', 'Cold & Refreshing', POPSICLE, [new Ingredient('Fruits', 5), new Ingredient('Popsicle Steak', 1)])
  ];
  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

// @Injectable()
// export class RecipeService {
//     recipeSelected = new Subject<Recipe>();
    

//     private recipes: Recipe[] =[];
//     recipesChanged: any;
    
//       constructor() {}

//     setRecipes(recipes: Recipe[])  {
//         this.recipes =recipes;
//         this.recipesChanged.next(this.recipes.slice());
//     }

//     getRecipes() {
//         return this.recipes.slice();
//     }

//     getRecipe(index: number){
//         return this.recipes[index];
//     }
// }