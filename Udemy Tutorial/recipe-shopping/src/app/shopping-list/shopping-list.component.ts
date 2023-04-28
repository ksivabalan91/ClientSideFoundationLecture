import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  
  ingredients: Ingredient[]=[
    new Ingredient('Chicken',5),
    new Ingredient('Cajun Spice',10)
  ];
  
  ngOnInit(){
  }

  addToList(ingredient:Ingredient){
    console.log(this.ingredients)
    this.ingredients.push(ingredient)
  }

}
