import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('Cajun chicken','It is spicy as fk. Not for the faint of heart','https://rasamalaysia.com/wp-content/uploads/2018/09/cajun-chicken-thumb.jpg'),
    new Recipe('The perfect cheeseburger',"It’s a fast-food classic but not all cheeseburgers are created equal.",'https://images.immediate.co.uk/production/volatile/sites/2/2020/04/Cheeseburger-74e8cde.jpg?quality=90&resize=556,505')
  ];

  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  ngOnInit(){
  }

  constructor(){}
  
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
