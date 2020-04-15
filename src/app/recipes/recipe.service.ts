import { Ingredient } from './shared/ingredient.model';
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';




  // addRecipe(recipe: Recipe) {
  //   this.recipes.push(recipe);
  //   this.recipesChanged.next(this.recipes.slice());
  // }

  // updateRecipe(index: number, newRecipe: Recipe) {
  //   this.recipes[index] = newRecipe;
  //   this.recipesChanged.next(this.recipes.slice());
  // }

  // deleteRecipe(index: number) {
  //   this.recipes.splice(index, 1);
  //   this.recipesChanged.next(this.recipes.slice());
  // }

@Injectable()
export class RecipeService {
    recipeSelected = new Subject<Recipe>();
    

    private recipes: Recipe[] =[
      new Recipe(
        'Kacchi Biryani',
        'Kacchi Biryani is an aromatic, mouth watering and authentic Bangladeshi dish with succulent mutton in layers of fluffy rice, fragrant spices and caramelized onions.',
        'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/10428468_10202653803920075_4440011492860019207_n.jpg?_nc_cat=111&_nc_sid=e007fa&_nc_ohc=uNB8ZYH2WwwAX8BR5n3&_nc_ht=scontent-ort2-1.xx&oh=f4784d81b94395d8fb4962595b431ccd&oe=5EBBA5E3',
        [
          new Ingredient('meat', 2)
        ]
      ),
      new Recipe(
        'Doi Fuchka','One of the famous chaat is doi fuchka. The hollow chips are filled with spicy potato filling, thick sweet and sour yogurt mixture, sweet tamarind chutney along with lots of fresh coriander leaves and few other ingredients.',
        'https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/10365637_10202833609695107_1232107524805101719_o.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=g4NRxHnjBRwAX8E1bEF&_nc_ht=scontent-ort2-1.xx&oh=dfca20df7c1b1131d943647eb06e1d9e&oe=5EBEC7D5',
        [
          new Ingredient('potato', 2)
        ]
      ),
      new Recipe(
        'Mango pudding','Mango pudding is smooth, velvety and soft  made with coconut milk. The mango pudding has the lovely flavors of both mangoes and coconut.',
        'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/92818414_10218217605165379_6558052595816988672_o.jpg?_nc_cat=103&_nc_sid=e007fa&_nc_ohc=-URyJRSHvzEAX_if08Z&_nc_ht=scontent-ort2-1.xx&oh=0954030233690d80c9feea339e37c58f&oe=5EBAFBBC',
        [
          new Ingredient('potato', 2)
        ]
      ),
      new Recipe(
        'Milk Cake','One of the famous milk based dessert recipe.',
        'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/93303559_10218217605045376_2576682908165079040_o.jpg?_nc_cat=104&_nc_sid=e007fa&_nc_ohc=kd-BcLgp2RgAX-hNg4v&_nc_ht=scontent-ort2-1.xx&oh=ce60cbe39117f2bc4a4bef5a739e92ea&oe=5EBE28EA',
        [
          new Ingredient('potato', 2)
        ]
      ),
      new Recipe(
        'Jelebi','One of the famous dessert. made with flour, suger. ',
        'https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/906634_10203009158563719_9092806595073754764_o.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_ohc=w31X2XSwDsgAX-FQQsR&_nc_ht=scontent-ort2-1.xx&oh=3bab26ef6177ec8decbdf4454c6ea2d8&oe=5EBC14CD',
        [
          new Ingredient('potato', 2)
        ]
      )
    ];
    recipesChanged: any;
   
    
      constructor() {}

    setRecipes(recipes: Recipe[])  {
        this.recipes =recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }
}



// export class RecipeService {
//     recipeSelected = new EventEmitter<Recipe>();
    
//     
//     getRecipes() {
//         return this.recipes.slice();
//     }

//     getRecipe(index: number){
//         return this.recipes[index];
//     }
// }