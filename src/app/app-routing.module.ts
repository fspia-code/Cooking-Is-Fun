import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { HomeComponent } from './home/home.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';



const approutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: ':id', component: RecipeDetailComponent }
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
