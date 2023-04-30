import { Component, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  @Input()
  recipe: Recipe;

  constructor(private shoppingSvc: ShoppingListService){}
  
  sendToCart(recipe:Recipe){
    this.shoppingSvc.toShoppingList(recipe);
  }
  
}
