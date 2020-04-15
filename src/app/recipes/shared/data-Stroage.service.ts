// import { RecipeService } from './../recipe.service';
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Recipe } from '../recipe.model';
// import { map, tap } from 'rxjs/operators';


// @Injectable()
// export class DataStorageService {
// constructor(private http: HttpClient, 
//     private recipeService: RecipeService){
// }

// storeRecipes(){
//     const recipes = this.recipeService.getRecipes();
//     this.http.put('https://recipe-book-8d323.firebaseio.com/recipes.json', recipes)
//     .subscribe(response =>{
//         console.log(response);
//     });
// }
// // use pipe map oparetor to allow us to transform data
// fetchRecipes() {
//     return this.http.get<Recipe[]>(
//         'https://recipe-book-8d323.firebaseio.com/recipes.json'
//         )
//     .pipe(
//         map(recipes => {
//         return recipes.map(recipe => {
//             return {
//                 ...recipe, 
//                 ingredients: recipe.ingredient ? 
//                 recipe.ingredient :[]
//             };
//         });
//     }),
//     tap(recipes => {
//         this.recipeService.setRecipes(recipes);
//     })
//     )
// }
// }