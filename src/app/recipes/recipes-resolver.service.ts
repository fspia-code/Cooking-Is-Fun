import { DataStorageService } from './shared/data-Stroage.service';
import { Injectable } from "@angular/core";
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';


@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]> {
    constructor(private dataStorageService: DataStorageService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      return this.dataStorageService.fetchRecipes();
    }
}