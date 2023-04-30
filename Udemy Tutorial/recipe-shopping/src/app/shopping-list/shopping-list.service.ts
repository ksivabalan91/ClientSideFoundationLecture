import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Chicken', 5),
    new Ingredient('Cajun Spice', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addToList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  
  toShoppingList(recipe:Recipe){
    this.ingredients.push(...recipe.ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
