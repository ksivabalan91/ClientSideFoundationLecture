import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit{
  
  ingredients: Ingredient[]=[];

  constructor(private shoppingSvc:ShoppingListService){}

  ngOnInit(){
    this.ingredients = this.shoppingSvc.getIngredients();
    this.shoppingSvc.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
      }
    )
  }  

  // addToList(ingredient:Ingredient){
  //   console.log(this.ingredients)
  //   this.ingredients.push(ingredient)
  // }

}
