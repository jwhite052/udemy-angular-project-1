import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
      new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/11/Pindi-chana-recipe.jpg'),
      new Recipe('Another test recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/11/Pindi-chana-recipe.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}