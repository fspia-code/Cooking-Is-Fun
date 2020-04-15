import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { HomeComponent } from './home/home.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeResolverService } from './recipes/recipes-resolver.service';



const approutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
    { path: 'new', component:RecipeEditComponent},
    { path: ':id/edit', component:RecipeEditComponent, resolve: [RecipeResolverService]}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
