import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cajun chicken',
      'It is spicy as fk. Not for the faint of heart',
      'https://rasamalaysia.com/wp-content/uploads/2018/09/cajun-chicken-thumb.jpg',
      [
        new Ingredient('chicken',10),
        new Ingredient('cajun spice',1),
        new Ingredient('olive oil',1)
      ]
      ),
    new Recipe(
      'The perfect cheeseburger',
      "It’s a fast-food classic but not all cheeseburgers are created equal.",
      'https://images.immediate.co.uk/production/volatile/sites/2/2020/04/Cheeseburger-74e8cde.jpg?quality=90&resize=556,505',
      [
        new Ingredient('ground beef',100),
        new Ingredient('Brioche buns',2),
        new Ingredient('pickles',1),
        new Ingredient('Cheddar Cheese',2)
      ]
      )
  ];

  getRecipes(){
    // returns a copy of the recipes array
    return this.recipes.slice();
  }

}
